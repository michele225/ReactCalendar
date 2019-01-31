import React, { Component } from 'react';

class AddEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isShowingEvent: false,
            isClosingEvent: false,
            isLoading: false,
            thereIsEvent:false,
            isAddingEvent: false,
            isClosingAddEvent: false
        }
    }


    addEvent = (e) =>{
        e.preventDefault();
        console.log("eccolllooo")
        let newDay;
        newDay = this.state.selectedDate.toString().substring(4,15);
        let re = new RegExp(" ", "g");
        var dayToDb = newDay.replace(re, "-");

        const requestBody = {
            Canale: 'Town Square',
            Data: dayToDb,
            TypeEevnt: this.getTipeEvent.value,
            Event: this.getEvent.value
        }
        this.props.addEvent(requestBody)
        this.setState({isLoading:false})
    }



      /* trasformDate = (day) => {
           let currentDay = day.toISOString().substring(0,10);
           return currentDay;
       }*/



    closeAddEvent = () => {
        this.setState({
            isClosingAddEvent: true,
            isAddingEvent: false,
            isShowingEvent: true,
            isClosingEvent: false
        })
    }

    render() {
        return(
            <div className="NoteContainer">
                <div className="container">
                    <h2 className="Noteh2">Inserisci un nuovo evento in {this.props.selectedDate.toString().substring(4,15)}</h2>
                    <form>
                        <input type="text" className="email NoteInput" placeholder="... Tipo ..." ref={(input) => this.getTipeEvent = input}/>
                        <br/>
                        <input type="text" className="pwd NoteInput" placeholder="... EVENTO ..." ref={(input) => this.getEvent = input}/>
                    </form>

                    <br/>
                    <button className="register NoteButton"  onClick={this.addEvent} >
                        <span className="NoteSpan">Save</span>
                    </button>
                    <button className="signin NoteButton" onClick={this.closeAddEvent}>
                        <span>Close</span>
                    </button>
                    <h3 className="Noteh3">Evento aggiunto con successo :)</h3>
                    <div className="reg"></div>
                    <div className="sig"></div>


                </div>
            </div>
        )
    }
}
export default AddEvent


