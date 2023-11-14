const sumAll = function(start, end) {
    let sum = 0;
  
    // Ensure start is always smaller than or equal to end
    const actualStart = Math.min(start, end);
    const actualEnd = Math.max(start, end);
  
    if (typeof start === 'string' || typeof end === 'string') {
      return `ERROR`;
    } else if (actualStart >= 0 && actualEnd >= 0) {
      for (let i = actualStart; i <= actualEnd; i++) {
        sum += i;
      }
      return sum;
    } else {
      return `ERROR`;
    }
  };
  
  // Example usage
  const result = sumAll(10, [90, 1]);
  console.log(result);  // Output: ERROR: Input should be numbers
   

// Do not edit below this line
module.exports = sumAll;
