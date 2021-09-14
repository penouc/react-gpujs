import React from 'react'

function data2Path(data) {

  return data.map((v, i) => {
    if(i === 0) { 
      return `M ${i*10} ${v}`;
    }else {
      return `L ${i*10} ${v}`;
    }
  }).join(' ');
}

export default function Svgo({data}) {

  console.log('data', data);
  const path = data2Path(data);
  console.log(path)
  return <svg height="20" width="100">
  <path id="lineAB" d={path} stroke="blue" strokeWidth="1" fill="none" />
    Sorry, your browser does not support inline SVG.
  </svg>

} 