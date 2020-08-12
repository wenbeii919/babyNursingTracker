import React, { Component } from "react";
import { connect } from "react-redux";
import { addFood } from "../../actions/nursingLogActions";

class AddFoodModal extends Component {
    state = {
        date: "",
        createdAt: "",
        amount: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let nursing = {};
        nursing.date = this.state.date ? this.state.date : undefined;
        nursing.createdAt = this.state.createdAt ? this.state.createdAt : undefined;
        nursing.amount = this.state.amount;
        this.props.addFood(nursing);
    };

    render() {
        return (
            <div
                className="modal fade"
                id="add-food"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="smallmodalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="smallmodalLabel">
                                Log a new feeding
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card-body card-block">
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            name="date"
                                            className="form-control"
                                            value={this.state.date}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="date"
                                            name="createdAt"
                                            className="form-control"
                                            value={this.state.createdAt}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            name="amount"
                                            className="form-control"
                                            value={this.state.amount}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleSubmit}
                                data-dismiss="modal"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { addFood }
)(AddFoodModal);
