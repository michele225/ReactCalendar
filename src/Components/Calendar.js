import React from "react";
import dateFns from "date-fns";

class Calendar extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            over: false,
            isAddingEvent: false,
            isClosingEvent: false
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
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div id={i} className="colCalendar colCalendar-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days rowCalendar">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {

            for (let i = 0; i < 7;) {
                i++;
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(

                    <div id={i}

                        className={`colCalendar cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay), i)}
                        onMouseOver={this.onMouseOver}
                    >
                        <div className="ViewEvent" >  </div>
                        <div className="AddEvent"   >  </div>



                        <span className="number">{formattedDate}</span>

                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="rowCalendar" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

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
                    <button className="signin NoteButton" onClick={this.closeEvent}>
                        <span>Close</span>
                    </button>
                    <h3 className="Noteh3">Evento aggiunto con successo :)</h3>
                    <div className="reg"></div>
                    <div className="sig"></div>


                </div>
            </div>
        );
    }

    renderAllEvent(){
        let events = [];

        if(this.props.responseAllEvent && this.props.isSearching) {
            console.log("dentro IF")
            for (var i = 0; i < this.props.responseAllEvent.length; i++) {
                console.log("dentro for")
                events.push(
                    <div>
                        <li className="liEvents">
                            <p className="pEvents">  <label>Tipo: {this.props.responseAllEvent[i].TypeEevnt} </label>
                             <br/>
                            <label> Evento: {this.props.responseAllEvent[i].Event}  </label> </p>
                        </li>
                    </div>
                )
                console.log("tipo = " + this.props.responseAllEvent[i].TypeEevnt)

                console.log("event = " + this.props.responseAllEvent[i].Event)
            }

        }
        return(
            <div className="EventsContainer">
                <div className="EvContainer">
                    <h2 className="Noteh2">Eventi del giorno {this.state.selectedDate.toString().substring(4,15)}</h2>

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
                    <button className="signin EventsButton" onClick={this.closeEvent}>
                        <span>Close</span>
                    </button>

                    <div className="reg"></div>
                    <div className="sig"></div>

                </div>
            </div>
        );



        return(
          <div> METTERE LA LISTA DEGLI EVENTI RIPRESI DAL DB E COLLEGARLA AL VIEW EVENT....OCCHIO</div>
        );
    }

    addEvent = (e) =>{
        e.preventDefault();

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
    }


    showEventDay = (day) =>{
       const requestBody = {
            Data: this.trasformDate(day)
        }

        this.props.showEventDay(requestBody)

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





    closeEvent = () =>{
        this.setState({
            isClosingEvent:true
        })
    }

    onMouseOver = () => {
        this.setState({over: true})
    }

    onDateClick = (day) => {
        this.showEventDay(day)
        this.setState({
            selectedDate: day,
            isAddingEvent : true,
            isClosingEvent: false

        });
    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div>

                {
                    this.state.isAddingEvent && !this.state.isClosingEvent ?
                        <div>
                            {this.renderAllEvent()}
                            {this.renderAddEvent()}

                        </div>
                        :
                        <div></div>
                }

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
