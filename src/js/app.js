import React from 'react';
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello </h1>
        <p> This is a Test</p>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
