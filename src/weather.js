import React, { Component } from 'react';
import byName from './helpers.js';

class weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : "",
      response : []
    }
  }


  onSubmit(event){
    this.setState({text:
    event.target.value})
    console.log(event.target.value
    );
  }

  searchWeather(){
    byName.byName(this.state.text).then((res) => {
      this.setSate(
        {res});
        console.log(res.data);

    })
  }

  render() {
    return(
      <div>
      <input type="text" onChange={(event) => this.onsubmit(event)} />
      <button onClick={() => this.searchWeather()}>I guess this is it?</button>
      </div>
    )
  }

}

export default weather;
