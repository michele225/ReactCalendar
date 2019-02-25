import React from "react";
import CalendarContainer from "../Containers/CalendarContainer";
import EditEventContainer from "../Containers/EditEventContainer";

class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div id= "appPreview">
                <header className="headerCalendar">
                    <div id="logo">
                        <span className="iconCalendar">date_range</span>
                        <span> Smart<b>Calendar</b> </span>
                    </div>
                </header>
                {
                    this.props.editFileClicked?
                        <div className="preview">
                            <EditEventContainer selectedDate={this.props.selectedDate}  event={this.props.event}/>
                        </div>
                        :
                        <div></div>
                }
                <div className="mainCalendar navi">
                    <CalendarContainer />
                </div>
            </div>
        );
    }
}

export default App;
