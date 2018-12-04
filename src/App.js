import React, { Component } from 'react';
import './app.css';

class App extends Component {
  playSound(id) {
    document.getElementById(id).play();
  }
  render() {
    return (
      <div>
        <div id="drum-machine" style={{border: "1px solid green"}} className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.playSound.bind(this, "Q")}>Q
                    <audio id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                  </button>
                </div>
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">W</button>
                </div>
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">E</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">A</button>
                </div>
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">S</button>
                </div>
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">D</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">Z</button>
                </div>
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">X</button>
                </div>
                <div className="col-md-4 drum-pad">
                  <button type="button" className="btn btn-outline-secondary btn-block">C</button>
                </div>
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
