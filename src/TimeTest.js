import React, { Component } from 'react';
import Clock from 'react-clockwall';
import './App.css';

class TimeTest extends Component {

  render() {
    let clocks = [
      { id: 'clock1', town: 'New York', timezone: 'America/New_York' },
      { id: 'clock5', town: 'नई दिल्ली', timezone: 'Asia/Kolkata', locale: 'hi' },
    ];
    return (
      <div className="flex-container clockwall">
          {clocks.map(clock =>
            <Clock key={clock.id} config={clock} />
          )}
        </div>
    )
  }
}

export default TimeTest;
