import React from "react";
import CalendarContainer from "./Containers/CalendarContainer";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="headerCalendar">
                    <div id="logo">
                        <span className="iconCalendar">date_range</span>
                        <span>
              Smart<b>Calendar</b>
            </span>
                    </div>
                </header>
                <main className="mainCalendar">
                    <CalendarContainer />
                </main>
            </div>
        );
    }
}

export default App;
