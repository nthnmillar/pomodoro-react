import React from 'react';
import 'bootstrap'; 
/* import logo from './logo.svg';
import './App.css'; */

class App extends React.Component {
  /*
  constructor(props){
    this.state = {
      input:""
    };
  }
  */

  render(){
  return (
      <div className="container-fluid">        
        <h1 className="text-center">Markdown Editor</h1>
          <div className="row">
            <div className="col-sm-6">
              <h2>Markdown</h2>
              <textarea id="editor"/> 
            </div>
            <div className="col-sm-6">
              <h2>Preview</h2>
              <div id="preview"/>
            </div>
          </div>             
      </div>
    );
  }
};

export default App;
