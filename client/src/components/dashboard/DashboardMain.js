import React, { Component } from "react";
import "../css/theme.css";
import jQuery from "jquery";

export default class DashboardMain extends Component {
    componentDidMount() {
        jQuery(document).ready(function(){
            jQuery('.fixed-action-btn').floatingActionButton();
          });
    }
    render() {
        return (
            <div>
                <h2 className="title-1">Overview</h2>
                <div className="fixed-action-btn">
                    <button className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </button>
                    <ul>
                        <li><button className="btn-floating red"><i class="material-icons">insert_chart</i></button></li>
                        <li><button className="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></button></li>
                        <li><button className="btn-floating green"><i class="material-icons">publish</i></button></li>
                        <li><button className="btn-floating blue"><i class="material-icons">attach_file</i></button></li>
                    </ul>
                </div>
            </div>
        )
    }
}