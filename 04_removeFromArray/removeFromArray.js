const removeFromArray = function(arr) {
    // Convert the arguments after the first one into an array
    const elementsToRemove = Array.from(arguments).slice(1);
  
    // Filter out elements to remove from the original array
    const resultArray = arr.filter(item => !elementsToRemove.includes(item));
  
    return resultArray;
  };
  
  // Example usage
  const originalArray = [1, 2, 3];
  const modifiedArray = removeFromArray(originalArray, "1", 3);
  
  console.log(modifiedArray); 
  



// Do not edit below this line
module.exports = removeFromArray;
