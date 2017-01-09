import React, { Component } from 'react';
import Clock from 'react-clockwall';
import './App.css';

class TimeTest extends Component {

  render() {
    let clocks = [
        { id: 'clock5', town: 'आप यहाँ हैं : नई दिल्ली', timezone: 'Asia/Kolkata', locale: 'hi' },
        { id: 'clock1', town: 'यहाँ नही : New York', timezone: 'America/New_York', locale:'en' },


    ];
    return (
      <div className="flex-container clockwall">
          {clocks.map(clock =>
            <Clock key={clock.id} config={clock} />
          )}
          <h1 className="stupid">बेवकूफ़</h1>
        </div>
    )
  }
}

export default TimeTest;
