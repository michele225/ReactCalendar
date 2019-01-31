import React from "react";
import dateFns from "date-fns";
import CellsContainer from "../Containers/CellsContainer";
import ShowEventsContainer from "../Containers/ShowEventsContainer";

import Days from "./Days";

class Calendar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            isLoading: false
        }
    }




    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header rowCalendar flex-middle">
                <div className="colCalendar colCalendar-start">
                    <div className="iconCalendar" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="colCalendar colCalendar-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="colCalendar colCalendar-end" onClick={this.nextMonth}>
                    <div className="iconCalendar">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {

        return <Days currentMonth={ this.state.currentMonth} />;
    }

    renderCells() {

        return <CellsContainer currentMonth={ this.state.currentMonth} selectedDate={ this.state.selectedDate}/>;
    }
/*
    renderAddEvent(){
        return(
            <div className="NoteContainer">
                <div className="container">
                    <h2 className="Noteh2">Inserisci un nuovo evento in {this.state.selectedDate.toString().substring(4,15)}</h2>
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
        );
    }
    */

    renderAllEvent(){

        return(
            <ShowEventsContainer selectedDate={ this.state.selectedDate}/>
        );
    }




    /* deleteEvent = (id) => {
         console.log("sono nella delete")
         console.log(id)

         const requestBody = {
             Id: id
         }
         this.props.deleteEventCalendar(requestBody)

    }*/






    /*
    onMouseOver = () => {
        this.setState({over: true})
    }*/



    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
            isLoading: false
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        /*let renderCells = ""
        if (this.props.responseAllEventBetweenDate && !this.props.isLoading) {
            renderCells = this.renderCells()
        }else renderCells = <div>Sto Caricando</div>*/
        return (
            <div>
                <div className="calendar">
                    {this.renderHeader()}
                    {this.renderDays()}
                    {this.renderCells()}
                </div>
            </div>
        );
    }
}

export default Calendar
