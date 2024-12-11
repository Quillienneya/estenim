function checkIfFunction(_) {
  return typeof _ === 'function';
}

// Test the function with different inputs
console.log(checkIfFunction(() => {})); // Output: true (since it's a function)
console.log(checkIfFunction('Hello')); // Output: false (since it's not a function)
