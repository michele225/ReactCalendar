import React, { Component } from 'react';
import dateFns from "date-fns";

class Days extends Component {


    render() {
        const dateFormat = "dddd";
        const days = [];
        let startDate = dateFns.startOfWeek(this.props.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div id={i} className="colCalendar colCalendar-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            )
        }

        return <div className="days rowCalendar">{days}</div>

    }
}
export default Days


