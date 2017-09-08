import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';


var HelloWorld = React.createClass({
  getInitialState: function(){
    return {
      title: 'Hello World'
    }
  },

  render: function(){
    return (
      <div>
        <h3>{this.state.title}</h3>
        <HelloWorld2 name={this.state.title} />
      </div>  
    )
  }
});

var HelloWorld2 = React.createClass({
  render: function(){
    return (
      <div>
        <h5>{this.props.name}</h5>
      </div>  
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('root'));

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
