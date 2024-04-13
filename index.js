// 🛠 Requirements:
// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
// For example, if the user entered addition "+" and the first number was 3 and the second number was 4, the result printed would be: "The result is 7"

const rs = require('readline-sync');

let input = '', operator = '', v1, v2, moreMath = true, result, opArray = [], opFinished = false;

console.log('Simple Calculator');

function doTheStringMath (inputString){
  opArray = inputString.split(' ');
  if (opArray.length != 3){
    console.log('Please enter a valid operation string (# [op] #)');
    return;
  }
  v1 = Number(opArray[0]);
  v2 = Number(opArray[2]);
  if (isNaN(v1) || isNaN(v2)){
    console.log('Please enter a valid numbers in your string (# [op] #)');
    return;
  }
  operator = opArray[1];
  switch (operator) {
    case '*':
      result = v1 * v2;
      console.log('The product is ' + result + '.');
      opFinished = true;
      break;
    case '/':
      result = v1 / v2;
      console.log('The quotient is ' + result + '.');
      opFinished = true;
      break;
    case '-':
      result = v1 - v2;
      console.log('The difference is ' + result + '.');
      opFinished = true;
      break;
    case '+':
      result = v1 + v2;
      console.log('The sum is ' + result + '.');
      opFinished = true;
      break;
    default:
      console.log('Invalid operation. Please use one of the four operators (*,/,-,+)');
  }
}

while(moreMath){
  opFinished = false;
  input = rs.question('What operation are we performing? (*,/,-,+) or enter your operation as a string: # (op) #: ');
  if(input.length == 1){
    switch (input) {
      case '*':
        v1 = rs.questionInt('What is the first number in the operation? ');
        v2 = rs.questionInt('What is the second number in the operation? ');
        result = v1 * v2;
        console.log('The product is ' + result + '.');
        opFinished = true;
        break;
      case '/':
        v1 = rs.questionInt('What is the first number in the operation? ');
        v2 = rs.questionInt('What is the second number in the operation? ');
        result = v1 / v2;
        console.log('The quotient is ' + result + '.');
        opFinished = true;
        break;
      case '-':
        v1 = rs.questionInt('What is the first number in the operation? ');
        v2 = rs.questionInt('What is the second number in the operation? ');
        result = v1 - v2;
        console.log('The difference is ' + result + '.');
        opFinished = true;
        break;
      case '+':
        v1 = rs.questionInt('What is the first number in the operation? ');
        v2 = rs.questionInt('What is the second number in the operation? ');
        result = v1 + v2;
        console.log('The sum is ' + result + '.');
        opFinished = true;
        break;
      default:
        console.log('Invalid operation. Please use one of the four operators (*,/,-,+)');
    }
  } else {
    doTheStringMath(input);
  }
  if(opFinished){
    moreMath = rs.keyInYN('Do you have another operation to complete? ');
  }
}

console.log('See ya later!!');