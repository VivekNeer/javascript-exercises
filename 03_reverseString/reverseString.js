const reverseString = function(str) {
    let reversedString = ``;

    for ( let i = str.length - 1 ; i >= 0 ; i-- ){
        reversedString += str[i];
    }

    return reversedString;
};

const reversedString = reverseString('')
console.log(reversedString)

// Do not edit below this line
module.exports = reverseString;
