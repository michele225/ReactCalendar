import React, { Component } from 'react';


class EditEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEditingEvent: false
        }
    }

    componentDidMount() {
        document.getElementById("opacita").style.marginTop = window.pageYOffset.toString() + "px";
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
            Id: this.props.event.Id,
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
        document.body.style.overflowY = "hidden";
        return(
                <div id ="opacita" className="EditContainer myPost">
                    <div  className="myOpacity"></div>
                    <div className="containerEdit myFormEditEvent">
                        <h2 className="Noteh2Edit">Editing</h2>
                        <form>
                            <input type="text" className="emailEdit NoteInputEdit"  defaultValue = {this.props.event.TypeEevnt} ref={(input) => this.getTipeEvent = input}/>
                            <br/>
                            <input type="text" className="pwdEdit NoteInputEdit"defaultValue={this.props.event.Event} ref={(input) => this.getEvent = input}/>
                        </form>

                        <br/>
                        <div className="updateEdit">
                            <button className="saveEdit button2"  onClick={this.editEvent} >
                                <span className="EventSpan">SAVE</span>
                            </button>
                            <button className="closeEdit button3" onClick={this.closeEditingEvent}>
                                <span className="EventSpan">CLOSE</span>
                            </button>
                        </div>

                    </div>
                </div>

        )
    }
}
export default EditEvent


