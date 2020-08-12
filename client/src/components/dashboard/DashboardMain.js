import React, { Component } from "react";
import Filters from "./Filters";
import SleepTable from "./SleepTable";

export default class DashboardMain extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="overview-wrap">
                            <h2 className="title-1">Overview</h2>
                        </div>
                    </div>
                </div>
                <Filters />
            </div>
        )
    }
}