import React from "react";
import dateFns from "date-fns";

class NewCalendar extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        over: false
    };


    renderEvent(){
        return(
            <div className="NoteContainer">
                <div className="container">
                    <h2 className="Noteh2">Inserisci un evento</h2>
                    <form>
                        <input type="text" className="email NoteInput" placeholder="Tipo di evento"/>
                            <br/>
                            <input type="text" className="pwd NoteInput" placeholder="EVENTO"/>
                    </form>

                    <br/>
                    <button className="register NoteButton">
                        <span className="NoteSpan">register</span>
                    </button>
                    <button className="signin NoteButton">
                        <span>sign in</span>
                    </button>
                    <h3 className="Noteh3">Evento aggiunto con successo :)</h3>
                    <div className="reg"></div>
                    <div className="sig"></div>


                </div>
            </div>
        );
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

    onMouseOver = () => {
        this.setState({over: true})
    }

    onDateClick = (day, id) => {
        this.setState({
            selectedDate: day
        });
        console.log(day)
        console.log(id)
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
                <div>
                    {this.renderEvent()}
                </div>
                <div className="calendar">
                    {this.renderHeader()}
                    {this.renderDays()}
                    {this.renderCells()}
                </div>
            </div>
        );
    }
}

export default NewCalendar
