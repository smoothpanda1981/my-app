import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import App from './App';
import './index.css';


var HelloWorld = React.createClass({
  getInitialState: function(){
    return {
      title: 'Hello World'
    }
  },

  componentDidMount: function() {
    $.ajax({
      context: this,
      method: "get",
      url: "https://www.bitstamp.net/api/v2/ticker/btcusd/",
      contentType: "application/json",
      success: function(data) {
        console.log('data: ', data);
        this.setState({data: data}); // Notice this
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function(){
    return (
      <div>
        <h3>{this.state.title}</h3>
        <HelloWorld2 name={this.state.title} data={this.state.data} />
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
