import React from 'react';
import marked from 'marked';
import jquery from 'jquery';
import 'bootstrap'; 
/* import logo from './logo.svg';
import './App.css'; */

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input: '# Marked in browser\n\nRendered by **marked**.'
    };
    this.handleChange = this.handleChange.bind(this)
  }

  /*
  componentDidMount(){
    this.setState(
      {input:'# Marked in browser\n\nRendered by **marked**.'}
      )   
  }
  */

  handleChange(event){
    this.setState({input : event.target.value})    
  }

  render(){
  return (
      <div className="container-fluid">        
        <h1 className="text-center">Markdown Editor</h1>
          <div className="row">
            <div className="col-sm-6">
              <h2>Markdown</h2>
              <textarea onChange={this.handleChange} id="editor">{this.state.input}</textarea> 
            </div>
            <div className="col-sm-6">
              <h2>Preview</h2>
              <div dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} id="preview">
            
              </div>
            </div>
          </div>             
      </div>
    );
  }
};

export default App;

/*{this.innerHTML = (marked(this.state.input))} */
