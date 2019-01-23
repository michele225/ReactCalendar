import React from "react";
import EventContainer from "./Containers/EventContainer";
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
                    <EventContainer />
                </main>
            </div>
        );
    }
}

export default App;
