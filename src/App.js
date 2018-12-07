import React, { Component } from 'react';
import './app.css';
import drumData from './drumData.json';

class App extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  playSound(id) {
    document.getElementById(id).play();
  }
  
  handleKeyPress(event) {
    if(document.getElementById(event.key.toUpperCase()) != null) {
      document.getElementById(event.key.toUpperCase()).play();
    }
  }

  render() {
    return (
      <div>
        <div id="drum-machine" style={{border: "1px solid green"}} className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {drumData.map((drumPad) => {
                  return (
                    <div className="col-md-4 drum-pad" key={drumPad.id} onKeyPress={this.handleKeyPress.bind(this)}>
                      <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.playSound.bind(this, drumPad.id)}>{drumPad.id}
                        <audio id={drumPad.id} src={drumPad.src}></audio>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-md-4" id="display"> 
              <h2>display</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
