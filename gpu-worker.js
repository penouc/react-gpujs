importScripts('./gpu.js');

onmessage = function(e) {
  console.log('num ====>', e.data)
  // define gpu instance
  const gpu = new GPU();

  // input values
  const kernel = gpu.createKernel(function(x) {
      return x;
  }).setOutput([100]);

  const val = kernel(e.data);
  console.log('val ====>', val)
  // output some results!
  postMessage(val);
};