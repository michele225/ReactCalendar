import React, { Component } from 'react';

class ShowEvents extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.saveSelectedDate(this.props.selectedDate)
    }

    closeShowEvent = () =>{
        this.props.closeEvent()
    }

    addEventControl = () =>{
        this.props.openAddingEvent()
    }

    deleteEvent = (id) => {
        const requestBody = {
            Id: id
        }
        this.props.deleteEvent(requestBody)
    }

    editEvent = (event) => {
        this.props.openEditEvent(event)
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

    render() {
        const requestBody = {
            Data: this.trasformDate(this.props.selectedDate)
        }
        if(!this.props.isRefreshing){
            this.props.showEventDay(requestBody)
        }
        let events = "";
        if(this.props.responseAllEvent && this.props.isSearching) {
            events = this.props.responseAllEvent.map((event) =>
                <div key={event.Id}>
                    <p className="fas fa-calendar-edit"></p>
                    <li className="liEvents">
                        <p className="pEvents">  <label>Tipo: {event.TypeEevnt} </label>
                            <br/>
                            <label> Evento: {event.Event}  </label> </p>
                    </li>
                    <button className="buttonEvent button2Calendar" onClick={() => this.editEvent(event)}>EDIT</button>
                    <button className="buttonEvent button3Calendar" onClick={() => this.deleteEvent(event.Id)}>DELETE</button>
                </div>
            )
        }
        return(
            <div className="EventsContainer">
                <div className="EvContainer">
                    <h2 className="Noteh2">Eventi del giorno {this.props.selectedDate.toString().substring(4,15)}</h2>
                    <p className=" addEventCalendar far fa-calendar-plus fa-3x " onClick={this.addEventControl}></p>
                    <div id="list2">
                        <ol className="olEvents">
                            {
                                events
                            }
                        </ol>
                    </div>
                    <br/>
                    <button className="signin EventsButton" onClick={this.closeShowEvent}>
                        <span>Close</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default ShowEvents


