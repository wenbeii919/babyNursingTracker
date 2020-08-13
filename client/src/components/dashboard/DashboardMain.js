import React, { Component } from "react";
import "../css/theme.css";
import "../jquery/materialize";

export default class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A new nursing log was submitted! ');
        event.preventDefault();
      }

    render() {
        return (
            <div>
                <h2 className="title-1">Overview</h2>
                <div className="fixed-action-btn">
                    <button className="btn-floating btn-large green lighten-3">
                        <i className="material-icons">add</i>
                    </button>
                    <ul>
                        <li><button className="btn-floating btn-large modal-trigger green lighten-1" href="#addSleep">SLEEP</button></li>                       
                        <div id="addSleep" class="modal">
                            <div class="modal-content">
                                <h4>Baby's Sleeping!</h4>
                                <div class="row">
                                    <form class="col s12" onSubmit={this.handleSubmit}>
                                        <div class="row modal-form-row">
                                            <div class="input-field col s12">
                                                <input type="text" class="datepicker" value={this.state.value} onChange={this.handleChange} />
                                                <label for="date_input">Date</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" class="timepicker" value={this.state.value} onChange={this.handleChange} />
                                                <label for="created_at">Fall Asleep At</label>
                                            </div>
                                        </div>       
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" class="timepicker" value={this.state.value} onChange={this.handleChange}/>
                                                <label for="updated_at">Wake Up At</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="form-control btn btn-primary" type="submit">
                                                ADD
                                            </button>
                                        </div>             
                                    </form>
                                </div>
                            </div>
                        </div>
                        <li><button className="btn-floating btn-large modal-trigger green lighten-1" href="#addFood">FOOD</button></li>
                        <div id="addFood" class="modal">
                            <div class="modal-content">
                                <h4>Baby's Eating!</h4>
                                <div class="row">
                                    <form class="col s12" onSubmit={this.handleSubmit}>
                                        <div class="row modal-form-row">
                                            <div class="input-field col s12">
                                                <input type="text" class="datepicker" value={this.state.value} onChange={this.handleChange} />
                                                <label for="date_input">Date</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" class="timepicker" value={this.state.value} onChange={this.handleChange} />
                                                <label for="created_at">Meal Time</label>
                                            </div>
                                        </div>       
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" class="validate" value={this.state.value} onChange={this.handleChange}/>
                                                <label for="formula_intake">Amount (in ml)</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="form-control btn btn-primary" type="submit">
                                                ADD
                                            </button>
                                        </div>             
                                    </form>
                                </div>
                            </div>
                        </div>
                        <li><button className="btn-floating btn-large green lighten-1">DIAPER</button></li>
                    </ul>
                </div>

            </div>
        )
    }
}