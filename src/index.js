import React from 'react';
import ReactDOM from 'react-dom';

var worker = new Worker(new URL('../gpu-worker.js', import.meta.url));

worker.postMessage(123)
worker.onmessage = function(e) {
  var result = e.data;
  console.log(result);
};

class App extends React.Component {
  render() {
    return (
      <h1>Welcome to REACT</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));