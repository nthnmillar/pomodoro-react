import React from 'react';
import marked from 'marked';
import 'bootstrap'; 

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input: "# An H1 Header\n## An H2 Header\n[Google](https://www.google.com/)\nIn JavaScript, use `console.log()` to print to the console.\n```python\nname = 'Scott'\n print 'Hi my name is ' + name\n``` \n > Of all the things I've lost \n > I miss my mind the most. - Mark Twain\n* Lorem ipsum dolor sit amet, consectetur adipiscing elit.   \n![My Alt Text](https://via.placeholder.com/150)\n__This is strong text!__"
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({input : event.target.value})    
  }

  render(){
  return (
      <div className="container-fluid">        
        <h1 className="text-center" id="mark-title">Markdown Previewer</h1>
          <div className="row">
            <div className="col-sm-6">
              <h2 id="mark-subtitle">Markdown</h2>
              <textarea onChange={this.handleChange} id="editor">{this.state.input}</textarea> 
            </div>
            <div className="col-sm-6">
              <h2 id="mark-subtitle">Preview</h2>
              <div dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} id="preview">           
              </div>
            </div>
          </div>             
      </div>
    );
  }
};

export default App;
