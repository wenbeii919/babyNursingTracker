import React from 'react';
import URLSearchParams from 'url-search-params';
import { withRouter } from 'react-router-dom';
import {
    ButtonToolbar, Button, FormGroup, FormControl, ControlLabel,
    Row, Col,
} from 'react-bootstrap';

class Filters extends React.Component {
    constructor({ location: { search } }) {
        super();
        const params = new URLSearchParams(search);
        this.state = {
            type: params.get('type') || '',
            changed: false,
        };

        this.onChangeType = this.onChangeType.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.showOriginalFilter = this.showOriginalFilter.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { location: { search: prevSearch } } = prevProps;
        const { location: { search } } = this.props;
        if (prevSearch !== search) {
          this.showOriginalFilter();
        }
    }

    onChangeType(e) {
        this.setState({ type: e.target.value, changed: true });
    }

    showOriginalFilter() {
        const { location: { search } } = this.props;
        const params = new URLSearchParams(search);
        this.setState({
          type: params.get('type') || '',
          changed: false,
        });
    }
    applyFilter() {
        const { type } = this.state;
        const { history, urlBase } = this.props;
        const params = new URLSearchParams();
        if (type) params.set('type', type);
    
        const search = params.toString() ? `?${params.toString()}` : '';
        history.push({ pathname: urlBase, search });
    }

    render() {
        const { type, changed } = this.state;
        return (
            <Row>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <FormGroup>
                        <ControlLabel>Type:</ControlLabel>
                        <FormControl
                            componentClass="select"
                            value={type}
                            onChange={this.onChangeStatus}
                        >
                            <option value="">(All)</option>
                            <option value="Sleep">Sleep</option>
                            <option value="Food">Food</option>
                            <option value="Diaper">Diaper</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <FormGroup>
                        <ControlLabel>&nbsp;</ControlLabel>
                        <ButtonToolbar>
                            <Button bsStyle="primary" type="button" onClick={this.applyFilter}>
                                Apply
                            </Button>
                            <Button
                                type="button"
                                onClick={this.showOriginalFilter}
                                disabled={!changed}
                            >
                                Reset
                            </Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Col>
          </Row>
        );
    }
}

export default withRouter(Filters);
