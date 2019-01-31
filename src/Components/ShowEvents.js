import React, { Component } from 'react';
import AddEventContainer from "../Containers/AddEventContainer";

class ShowEvents extends Component {


    constructor(props){
        super(props);
        this.state = {
            isAddingEvent : false
        }
    }


    closeShowEvent = () =>{
        this.props.closeEvent()
    }

    addEventControl = () =>{
        this.props.openAddingEvent()
    }

    deleteEvent = () => {
        console.log("sono in DELETE")
        console.log(this.props.responseAllEvent[0].Id)

        const requestBody = {
            Id: this.props.responseAllEvent[0].Id
        }

        this.props.deleteEvent(requestBody)
    }


    render() {
        let events = [];


        if(this.props.responseAllEvent && this.props.isSearching) {
            for (var i = 0; i < this.props.responseAllEvent.length; i++) {
                console.log(this.props.responseAllEvent[i].Id)
                events.push(
                    <div key={this.props.responseAllEvent[i].Id}>
                        <p className="fas fa-calendar-edit"></p>

                        <li className="liEvents">
                            <p className="pEvents">  <label>Tipo: {this.props.responseAllEvent[i].TypeEevnt} </label>
                                <br/>
                                <label> Evento: {this.props.responseAllEvent[i].Event}  </label> </p>


                        </li>
                        <button onClick={this.deleteEvent}>DELETE</button>
                    </div>
                )
            }

        }

        return(

        <div>

                            <div className="EventsContainer">
                                <div className="EvContainer">
                                    <h2 className="Noteh2">Eventi del giorno {this.props.selectedDate.toString().substring(4,15)}</h2>
                                    <p className=" addEventCalendar far fa-calendar-plus fa-5x " onClick={this.addEventControl}></p>

                                    <div id="list2">
                                        <ol className="olEvents">
                                            {
                                                events
                                            }
                                        </ol>
                                    </div>
                                    <br/>
                                    <button className="register EventsButton"   >
                                        <span className="EventsSpan">Edit </span>
                                    </button>
                                    <button className="signin EventsButton" onClick={this.closeShowEvent}>
                                        <span>Close</span>
                                    </button>

                                    <div className="reg"></div>
                                    <div className="sig"></div>

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


