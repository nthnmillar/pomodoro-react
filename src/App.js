import React from 'react';
import marked from 'marked';
import 'bootstrap'; 

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({input : event.target.value})    
  }

  render(){
  return (
      <div className="container-fluid">        
        <h1 className="text-center">Drum Machine</h1>
                  
      </div>
    );
  }
};

export default App;
