function reverseString(str) {
const strArr = str.split('');
strArr.reverse();
return strArr.join('');
}

const output = reverseString('harrison');

console.log(output);