import React, { Component } from 'react';


class EditEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEditingEvent: false
        }
    }


    closeEditingEvent = () => {
        this.props.closeEditingEvent()
    }

    editEvent = (e) =>{
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
        this.props.editEvent(requestBody)
        this.getTipeEvent.value = ""
        this.getEvent.value = ""
    }


    render() {

        return(
            <div className="NoteContainer">
                <div className="container">
                    <h2 className="Noteh2">Modifica l'evento del {this.props.selectedDate.toString().substring(4,15)}</h2>
                    <form>
                        <input type="text" className="email NoteInput"  defaultValue = {this.props.event.TypeEevnt} ref={(input) => this.getTipeEvent = input}/>
                        <br/>
                        <input type="text" className="pwd NoteInput"defaultValue={this.props.event.Event} ref={(input) => this.getEvent = input}/>
                    </form>

                    <br/>
                    <button className="register NoteButton"  onClick={this.editEvent} >
                        <span className="NoteSpan">Save</span>
                    </button>
                    <button className="signin NoteButton" onClick={this.closeEditingEvent}>
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
export default EditEvent


