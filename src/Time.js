

import React, { Component } from 'react';
import {ApAnalogClock, ApAnalogClockStyle, ApDigitalClock} from 'apeman-react-clock';

class Time extends Component {

  render() {
    return (
      <div>
        <ApAnalogClockStyle scoped />
        <ApDigitalClock />
      </div>
    )
  }
}

export default Time;
