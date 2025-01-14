function add(a, b) {  return a + b;}

function performCalculation(a, b, callback) {
  if (typeof callback !== 'function') {
    console.error('Error: Invalid callback provided.  Must be a function.');
    return; // Or throw an error
  }
  setTimeout(() => {
    const result = callback(a, b);
    console.log(result); 
  }, 1000); // Simulate an asynchronous operation
}

performCalculation(5, 3, add); // Correct usage

// Correct handling of incorrect input
performCalculation(10, 5, "add");