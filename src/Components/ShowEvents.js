import React, { Component } from 'react';
import AddEventContainer from "../Containers/AddEventContainer";
import EditEventContainer from "../Containers/EditEventContainer";

import { Button } from 'react-bootstrap';


class ShowEvents extends Component {


    constructor(props){
        super(props);
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

    /*editEvent = (id) => {
       this.props.openEditEvent(id)
    }*/

    editEvent = (event) => {
        console.log(event)
        var eventCalendar = [event, this.props.selectedDate];
        console.log(eventCalendar)
        this.props.openEditEvent(eventCalendar)
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
        let array = [];
        if(this.props.responseAllEvent && this.props.isSearching) {
            events = this.props.responseAllEvent.map((event) =>
                <div key={event.Id}>
                    <p className="fas fa-calendar-edit"></p>
                    <li className="liEvents">
                        <p className="pEvents">  <label>Tipo: {event.TypeEevnt} </label>
                            <br/>
                            <label> Evento: {event.Event}  </label> </p>
                    </li>
                    <button className="buttonEvent button2" onClick={() => this.editEvent(event)}>EDIT</button>
                    <button className="buttonEvent button3" onClick={() => this.deleteEvent(event.Id)}>DELETE</button>
                    {
                        this.props.isEditing && this.props.id == event.Id?
                            <EditEventContainer selectedDate={this.props.selectedDate}  event={event}/>
                            :
                            <div></div>
                    }
                </div>
            )

        }

        return(
            <div>
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
                {
                    this.props.isAddingEvent?
                        <AddEventContainer selectedDate={this.props.selectedDate}/>
                        :
                       <div></div>
                }
            </div>
        );

    }
}

export default ShowEvents


