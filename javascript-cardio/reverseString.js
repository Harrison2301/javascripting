function reverseString(str) {
    // sol 1 
// return str.split('').reverse().join('');

    // sol 2
// let revString = '';
// for(let i = str.length - 1; i >= 0; i--){
//     revString = revString + str[i];
// }
// return revString;

    // sol 3 
let revString = '';
str.split('').forEach(char => revString = char +
    revString);
    return revString;
}

const output = reverseString('harrison');

console.log(output);