import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import App from './App'


// Courtesy of https://feathericons.com/
const Icon = () => <i className='iconCalendar fa fa-plug'/>;

class HelloWorldPlugin {
    initialize(registry)
    {
        registry.registerMainMenuAction (
            "Blog",
            () => {
                $('#post-list').css("overflow-y", "scroll");
                $('#create_post').css("display", "none")
                //$('#post-list').css("margin-top", "25px")
                $('#post-list').css("background", "#f4f4ef")
                var link = $('<link/>', {
                    rel: 'stylesheet',
                    type:'text/css',
                    href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
                    integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
                    crossorigin: 'anonymous'
                })
                $('head').prepend(link);
                ReactDOM.render(
                    <App/>,
                    document.getElementById('post-list')
                );
            },
            <Icon />,
        );
    }
}

window.registerPlugin('com.mattermost.webapp-calendar', new HelloWorldPlugin());
