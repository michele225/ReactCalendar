import React from "react";
import dateFns from "date-fns";
import CellsContainer from "../Containers/CellsContainer";
import ShowEventsContainer from "../Containers/ShowEventsContainer";

import Days from "./Days";

class Calendar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            isLoading: false
        }
    }

    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="headerCalendar rowCalendar flex-middle">
                <div className="colCalendar colCalendar-start">
                    <div className="iconCalendar" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="colCalendar colCalendar-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="colCalendar colCalendar-end" onClick={this.nextMonth}>
                    <div className="iconCalendar">chevron_right</div>
                </div>
            </div>
        )
    }

    renderDays() {
        return <Days currentMonth={ this.state.currentMonth}/>
    }

    renderCells() {
        return <CellsContainer currentMonth={ this.state.currentMonth} selectedDate={ this.state.selectedDate}/>
    }

    nextMonth = () => {
        this.reloadNewMonth()
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
            isLoading: false
        });
    };

    prevMonth = () => {
        this.reloadNewMonth()
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    reloadNewMonth = () => {
        this.props.reloadNewMonth()
    }


    render() {
        return (
            <div>
                <div className="calendar">
                    {this.renderHeader()}
                    {this.renderDays()}
                    {this.renderCells()}
                </div>
            </div>
        )
    }
}

export default Calendar
