import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	Within the App component
      	{this.props.children}
      </div>
    );
  }
}
