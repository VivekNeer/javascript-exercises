const repeatString = function(string, num) {
    if ( num < 0 ) return `ERROR`;

    let result = '';
  
    for (let i = 0; i < num; i++) {
      result += string;
    }

  
    return result;
  };
  
  const number = Math.floor(Math.random() * 1000)

  const repeatedString = repeatString('',number);
  console.log(repeatedString); 
  
// Do not edit below this line
module.exports = repeatString;
