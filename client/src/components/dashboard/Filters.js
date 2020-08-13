import React, { Component } from "react";
import $ from "jquery";
import "select2/dist/css/select2.min.css";
import "select2/dist/js/select2.min";
import AddSleepModal from "./AddSleepModal";
import AddFoodModal from "./AddFoodModal";
import AddDiaperModal from "./AddDiaperModal";

export default class Filters extends Component {

  componentDidMount() {
    // Slider 2
    try {
      $(".js-select2").each(function() {
        $(this).select2({
          minimumResultsForSearch: 20,
          dropdownParent: $(this).next(".dropDownSelect2")
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="table-data__tool mt-5">
        <div className="table-data__tool-left">
          <div className="rs-select2--light rs-select2--md">
            <select
                className="js-select2"
                name="types"
                defaultValue="all-logs"
            >
                <option value="all-logs">All Logs</option>
                <option value="sleep">Sleep Log</option>
                <option value="food">Food Log</option>
                <option value="diaper">Diaper Log</option>
            </select>
            <div className="dropDownSelect2" />
          </div>
          <div className="rs-select2--light rs-select2--sm">
            <select className="js-select2" name="time" defaultValue="monthly">
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
            <div className="dropDownSelect2" />
          </div>
          <button className="au-btn-filter">
            <i className="zmdi zmdi-filter-list" />
            filters
          </button>
        </div>
        <div className="table-data__tool-right">
            <button
                className="au-btn au-btn-icon au-btn--small"
                data-toggle="modal"
                data-target="#add-sleep"
            >
                <i className="zmdi zmdi-plus" />
                add sleep
            </button>
            <button
                className="au-btn au-btn-icon au-btn--small"
                data-toggle="modal"
                data-target="#add-food"
            >
                <i className="zmdi zmdi-plus" />
                add food
            </button>
            <button
                className="au-btn au-btn-icon au-btn--small"
                data-toggle="modal"
                data-target="#add-diaper"
            >
                <i className="zmdi zmdi-plus" />
                add diaper change
            </button>
        </div>
        <AddSleepModal />
        <AddFoodModal />
        <AddDiaperModal />
      </div>
    );
  }
}
