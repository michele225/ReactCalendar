import React, { Component } from 'react';

class AddEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAddingEvent: false
        }
    }

    componentDidMount() {
        document.getElementById("opacitaAdd").style.marginTop = (window.pageYOffset.toString() - 50) + "px";
        document.getElementsByClassName("myOpacityCalendar")[0].style.height = Math.max( document.body.scrollHeight) + "px"
        //document.getElementsByClassName("myOpacityCalendar")[0].style.height = Math.max( document.getElementById("post-list").scrollHeight) + "px"
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

    closeAddingEvent = () => {
        this.props.closeAddingEvent()
    }

    render() {
        return(
            <div className="NoteContainer myPost">
                <div className="myOpacityCalendar"></div>
                <div id="opacitaAdd" className="containerAddEvent myFormAddEvent">
                    <h2 className="Noteh2">Inserisci un nuovo evento in {this.props.selectedDate.toString().substring(4,15)}</h2>
                    <form>
                        <input type="text" className="email NoteInput" placeholder="... Tipo ..." ref={(input) => this.getTipeEvent = input}/>
                        <br/>
                        <input type="text" className="pwd NoteInput" placeholder="... EVENTO ..." ref={(input) => this.getEvent = input}/>
                    </form>

                    <br/>
                    <button className="register noteButtonSave NoteButton"  onClick={this.addEvent} >
                        <span >Save</span>
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


