import React, { Component } from 'react';
import EditEventContainer from "../Containers/EditEventContainer";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";


class Event extends Component {

    deleteEvent = (id) => {
        const requestBody = {
            Id: id
        }
        this.props.deleteEvent(requestBody)
    }

    editEvent = () => {
        this.props.openEditEvent()
    }

    render() {
        return(
            <div>
            <li id="EventoUnico" className="liEvents">
                <p className="pEvents">  <label>Tipo: {this.props.event.TypeEevnt} </label>
                    <br/>
                    <label> Evento: {this.props.event.Event}  </label> </p>
            </li>
            <button onClick={() => this.deleteEvent(this.props.event.Id)}>DELETE</button>
            <button onClick={this.editEvent}>EDIT</button>
            {
                this.props.isEditing?
                    ReactDOM.render(
                        <Provider store={store}>
                            <EditEventContainer event = {this.props.event} />
                        </Provider>,
                        document.getElementById('EventoUnico')
                    )
                    :
                    <div></div>
            }
            </div>
        )
    }
}

export default Event


