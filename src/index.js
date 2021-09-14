import React from 'react';
import ReactDOM from 'react-dom';
import Svgo from './svgo';

var worker = new Worker(new URL('../gpu-worker.js', import.meta.url));

worker.postMessage(123)
worker.onmessage = function(e) {
  var result = e.data;
  console.log(result);
};

function randomArray(len, min, max) {
  return Array(len).fill(1).map(v => Math.floor(Math.random() * (max - min) + min))
}
class App extends React.Component {

  render() {

    const arr = Array(100000).fill(1);
    return (
      <>
        <h1>Welcome to REACT</h1>
        <div style={{border: '1px solid #eee', display: 'inline-block', padding: '2px'}}>
          {
            arr.map(v => <Svgo data={randomArray(11, 0, 20)} />)
          }
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));