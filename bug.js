function add(a, b) {  return a + b;}

function performCalculation(a, b, callback) {
  setTimeout(() => {
    const result = callback(a, b);
    console.log(result); 
  }, 1000); // Simulate an asynchronous operation
}

performCalculation(5, 3, add); // Correct usage

// Incorrect usage - callback is not a function
performCalculation(10, 5, "add");