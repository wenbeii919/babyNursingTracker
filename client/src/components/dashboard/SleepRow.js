import React, { Component } from "react";
import { connect } from "react-redux";
import format from 'date-fns/format'
import { deleteNursingLog } from "../../actions/nursingLogActions";

class SleepRow extends Component {
    // static propTypes = {
    //   sleep: PropTypes.object.isRequired,
    //   deletesleep: PropTypes.func.isRequired
    // };
  
    render() {
      const { date, createdAt, updatedAt } = this.props;
      return (
        <tr className="tr-shadow">
          <td>
            {format(date, "MM/DD/YYYY")}
          </td>
          <td>
            {format(createdAt, "hh:mm")}
          </td>
          <td>
            {format(updatedAt, "hh:mm")}
          </td>
          <td>
            <div className="table-data-feature">
              <button
                className="item"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
              >
                <i className="zmdi zmdi-edit" />
              </button>
              {/* <button
                className="item"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
                onClick={e => this.props.deleteNursingLog({type: 'Sleep'})}
              >
                <i className="zmdi zmdi-delete" />
              </button> */}
            </div>
          </td>
        </tr>
      );
    }
  }
  
  export default connect(
    null,
    { deleteNursingLog }
  )(SleepRow);
  