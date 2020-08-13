import React, { Component } from "react";
import "../css/theme.css";
import "../jquery/materialize";

export default class DashboardMain extends Component {
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
                                    <form class="col s12">
                                        <div class="row modal-form-row">
                                            <div class="input-field col s12">
                                                <input type="text" class="datepicker" />
                                                <label for="date_input">Date</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" class="timepicker" />
                                                <label for="created_at">Fall Asleep At</label>
                                            </div>
                                        </div>       
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" class="timepicker" />
                                                <label for="updated_at">Wake Up At</label>
                                            </div>
                                        </div>             
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <a href="#!" class="modal-close waves-effect waves-green btn-flat">ADD</a>
                            </div>
                        </div>
                        <li><button className="btn-floating btn-large green lighten-1">FOOD</button></li>
                        <li><button className="btn-floating btn-large green lighten-1">DIAPER</button></li>
                    </ul>
                </div>

            </div>
        )
    }
}