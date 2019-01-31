import React, { Component } from 'react';
import AddEventContainer from "../Containers/AddEventContainer";

class ShowEvents extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    closeShowEvent = () =>{
        this.props.closeEvent()
    }

    addEventControl = () =>{
        console.log(this.state.isShowingEvent)
        this.setState({
        })
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
                        <button >DELETE</button>
                    </div>
                )
            }

        }

        console.log(this.state)
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
                            {<AddEventContainer selectedDate={this.props.selectedDate}/>}


        </div>

        );

    }
}

export default ShowEvents


