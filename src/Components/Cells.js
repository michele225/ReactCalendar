import React, { Component } from 'react';
import dateFns from "date-fns";
import ShowEventsContainer from "../Containers/ShowEventsContainer";


class Cells extends Component {



    constructor(props){
        super(props);
        this.state = {
            selectedDate: this.props.selectedDate,
            isShowingEvent: false,
            isLoading: false
        }
    }

    trasformDate = (day) => {
        let currentDay = day.toString().substring(4,15);

        let re = new RegExp(" ", "g");
        var date = currentDay.replace(re, "-");
        let day1 = date.toString().substring(4,6);
        let month = date.toString().substring(0,3);
        let year = date.toString().substring(7,11);

        let d=  year + "-" + month + "-" + day1;
        return d;

    }


    trasformDateInverse = (day) => {
        let currentDay = day.toString().substring(0,10);
        let re = new RegExp(" ", "g");
        var date = currentDay.replace(re, "-");
        let day1 = date.toString().substring(8,10);
        let month = date.toString().substring(5,7);
        switch (month) {
            case '01': month = 'Jan';
                break;
            case '02': month = 'Feb';
                break;
            case '03': month = 'Mar';
                break;
            case '04': month = 'Apr';
                break;
            case '05': month = 'May';
                break;
            case '06': month = 'Jun';
                break;
            case '07': month = 'Jul';
                break;
            case '08': month = 'Aug';
                break;
            case '09': month = 'Sep';
                break;
            case '10': month = 'Oct';
                break;
            case '11': month = 'Nov';
                break;
            case '12': month = 'Dec';
                break;
        }
        let year = date.toString().substring(0,4);

        let d=  year + "-" + month + "-" + day1;

        return d;

    }



    onDateClick = (day) => {
        this.props.openEvent()
        this.setState({
            selectedDate: day,
        });
        //this.showEventDay(day)
    };



    render() {
        const monthStart = dateFns.startOfMonth(this.props.currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];
        const requestBody = {
            DataInizio: this.trasformDate(startDate),
            DataFine: this.trasformDate(endDate)
        }

        if (this.props.isLoading ||  this.props.isLoadingAfterDelete){
            this.props.asyncCallGetAllevents(requestBody)
          //  this.setState({isLoading:true})
        }

        let days = [];
        let day = startDate;
        let formattedDate = "";
        let thereIsEvent=[]
        while (day <= endDate) {
            for (let i = 0; i < 7;) {

                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                const myDay = day;
                if (this.props.responseAllEventBetweenDate != null && !this.props.isLoading){
                    for (let j=0 ; j< this.props.responseAllEventBetweenDate.length; j++) {
                        if (this.trasformDateInverse(this.props.responseAllEventBetweenDate[j].Data.substr(0,10)) == this.trasformDate(myDay)) {

                            thereIsEvent[this.trasformDate(myDay)] = true;
                        }
                    }
                }
                days.push(

                    <div id={i}

                         className={`colCalendar cell ${
                             !dateFns.isSameMonth(day, monthStart)
                                 ? "disabled"
                                 : dateFns.isSameDay(day, this.state.selectedDate) ? "selected" : ""
                             }`}
                         key={day}
                         onClick={() => this.onDateClick(dateFns.parse(cloneDay), i)}
                    >
                        {
                            thereIsEvent[this.trasformDate(cloneDay)]?
                                <p className=" eventDay fas fa-calendar-day fa-3x" > </p>

                                :
                                <div className="nonCiSono"></div>
                        }



                        <span className="number">{formattedDate}</span>

                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
                thereIsEvent = []
                i++;
            }
            rows.push(
                <div className="rowCalendar" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        console.log("evento" + this.props.isShowingEvent)
        return (
            <div>
                {
                    this.props.isShowingEvent?
                        <ShowEventsContainer selectedDate={ this.state.selectedDate} isShowingEvent={this.state.isShowingEvent}/>
                        :
                        <div></div>
                }
                <div className="body">{rows}</div>;
            </div>
        )
    }
}
export default Cells


