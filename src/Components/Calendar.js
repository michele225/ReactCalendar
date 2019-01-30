import React from "react";
import dateFns from "date-fns";

class Calendar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            over: false,
            isShowingEvent: false,
            isClosingEvent: false,
            isLoading: false,
            thereIsEvent:false,
            isAddingEvent: false,
            isClosingAddEvent: false
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
            )
            //console.log(dateFns.format(dateFns.addDays(startDate, i), dateFormat))
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
        const requestBody = {
            DataInizio: this.trasformDate(startDate),
            DataFine: this.trasformDate(endDate)
        }
        if (!this.state.isLoading){
            this.props.asyncCallGetAllevents(requestBody)
            this.setState({isLoading:true})
        }

        let days = [];
        let day = startDate;
        let formattedDate = "";
        let thereIsEvent=[]
        while (day <= endDate) {
            for (let i = 0; i < 7;) {

                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                const myDay = day;
                if (this.props.responseAllEventBetweenDate != null && !this.props.isLoading){
                    for (let j=0 ; j< this.props.responseAllEventBetweenDate.length; j++) {
                        //console.log(this.trasformDate(this.trasformDate(cloneDay)))
                        if (this.trasformDateInverse(this.props.responseAllEventBetweenDate[j].Data.substr(0,10)) == this.trasformDate(myDay)) {

                            thereIsEvent[this.trasformDate(myDay)] = true;
                        }
                    }
                }
                //console.log(this.trasformDate(day) + " " +  thereIsEvent[this.trasformDate(cloneDay)])
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
                        {
                            thereIsEvent[this.trasformDate(cloneDay)]?
                            <p className=" eventDay fas fa-calendar-day fa-3x" > </p>

                            :
                                <div className="nonCiSono"></div>
                        }



                        <span className="number">{formattedDate}</span>

                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
                thereIsEvent = []
                i++;
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

    renderAllEvent(){
        let events = [];

        if(this.props.responseAllEvent && this.props.isSearching) {
            for (var i = 0; i < this.props.responseAllEvent.length; i++) {
                events.push(
                    <div>
                        <li className="liEvents">
                            <p className="pEvents">  <label>Tipo: {this.props.responseAllEvent[i].TypeEevnt} </label>
                             <br/>
                            <label> Evento: {this.props.responseAllEvent[i].Event}  </label> </p>
                        </li>
                    </div>
                )
            }

        }

        return(
            <div className="EventsContainer">
                <div className="EvContainer">
                    <h2 className="Noteh2">Eventi del giorno {this.state.selectedDate.toString().substring(4,15)}</h2>
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
        );



        return(
          <div> METTERE LA LISTA DEGLI EVENTI RIPRESI DAL DB E COLLEGARLA AL VIEW EVENT....OCCHIO</div>
        );
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

    showEventDay = (day) =>{
       const requestBody = {
            Data: this.trasformDate(day)
        }

        this.props.showEventDay(requestBody)

    }

   /* trasformDate = (day) => {
        let currentDay = day.toISOString().substring(0,10);
        return currentDay;
    }*/

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


    trasformDateInverse = (day) => {
        let currentDay = day.toString().substring(0,10);
        let re = new RegExp(" ", "g");
        var date = currentDay.replace(re, "-");
        let day1 = date.toString().substring(8,10);
        let month = date.toString().substring(5,7);
        switch (month) {
            case '01': month = 'Jan';
                break;
            case '02': month = 'Feb';
                break;
            case '03': month = 'Mar';
                break;
            case '04': month = 'Apr';
                break;
            case '05': month = 'May';
                break;
            case '06': month = 'Jun';
                break;
            case '07': month = 'Jul';
                break;
            case '08': month = 'Aug';
                break;
            case '09': month = 'Sep';
                break;
            case '10': month = 'Oct';
                break;
            case '11': month = 'Nov';
                break;
            case '12': month = 'Dec';
                break;
        }
        let year = date.toString().substring(0,4);

        let d=  year + "-" + month + "-" + day1;

        return d;

    }


    closeShowEvent = () =>{
        this.setState({
            isClosingEvent:true,
            isAddingEvent: false,
            isShowingEvent: false
        })
    }

    closeAddEvent = () => {
        this.setState({
            isClosingAddEvent: true,
            isAddingEvent: false,
            isShowingEvent: true,
            isClosingEvent: false
        })
    }

    addEventControl = () =>{
        console.log("primooo")
        this.setState({
            isAddingEvent: true,
            isClosingAddEvent: false,
            isShowingEvent: true,
            isClosingEvent: false

        })
        console.log(this.state.isAddingEvent)
    }

    /*
    onMouseOver = () => {
        this.setState({over: true})
    }*/

    onDateClick = (day) => {
        this.showEventDay(day)
        this.setState({
            selectedDate: day,
            isShowingEvent : true,
            isClosingEvent: false
        });
    };

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
        console.log(this.state)
        return (
            <div>

                {
                    this.state.isShowingEvent && !this.state.isClosingEvent ?
                        <div>
                            {this.renderAllEvent()}

                        </div>
                        :
                        <div></div>
                }
                {
                        this.state.isShowingEvent && !this.state.isClosingEvent && !this.state.isClosingAddEvent && this.state.isAddingEvent?
                            <div>
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
