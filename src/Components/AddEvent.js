import React, { Component } from 'react';

class AddEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAddingEvent: false
        }
    }


    addEvent = (e) =>{
        e.preventDefault();
        let newDay;
        newDay = this.props.selectedDate.toString().substring(4,15);
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
        this.getTipeEvent.value = ""
        this.getEvent.value = ""
    }



      /* trasformDate = (day) => {
           let currentDay = day.toISOString().substring(0,10);
           return currentDay;
       }*/


    closeAddingEvent = () => {
        this.props.closeAddingEvent()
    }


    render() {

        return(
            <div className="NoteContainer">
                <div className="containerAddEvent">
                    <h2 className="Noteh2">Inserisci un nuovo evento in {this.props.selectedDate.toString().substring(4,15)}</h2>
                    <form>
                        <input type="text" className="email NoteInput" placeholder="... Tipo ..." ref={(input) => this.getTipeEvent = input}/>
                        <br/>
                        <input type="text" className="pwd NoteInput" placeholder="... EVENTO ..." ref={(input) => this.getEvent = input}/>
                    </form>

                    <br/>
                    <button className="register noteButtonSave NoteButton"  onClick={this.addEvent} >
                        <span className="NoteSpan">Save</span>
                    </button>
                    <button className="signin NoteButton noteButtonDelete" onClick={this.closeAddingEvent}>
                        <span>Close</span>
                    </button>
                    <h3 className="Noteh3">Evento aggiunto con successo :)</h3>
                </div>
            </div>
        )
    }
}
export default AddEvent


