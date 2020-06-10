import React, { Component } from 'react';
// import moment from 'moment';
import Clock from 'react-live-clock';
import './Clock.css'
// import { Switch } from 'antd';

class Time extends Component {
    render() {
        return (
            <div className="time">
                    <Clock format={"h:mm:ss A"} ticking={true}/>
            </div>
        );
    }
}

export default Time;