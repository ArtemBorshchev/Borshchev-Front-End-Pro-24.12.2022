/* eslint-disable no-alert */

const inputNumber1 = prompt('Enter first number:');
const inputOperator = prompt('Enter operator: +, -, *, /, %(відсоток), ^ (ступінь ):');
const inputNumber2 = prompt('Enter second number:');

function doMath(number1, operator, number2) {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        alert('You can\'t devide by \'0\'');
      }
      break;
    case '%':
      result = number1 * (number2 / 100);
      break;
    case '^':
      for (let i = 1, j = number1; i < number2; i += 1) {
        j *= j;
      }

      result = number1;
      break;
    default:
      break;
  }
  return result;
}

alert(`result is: ${doMath(inputNumber1, inputOperator, inputNumber2)}`);
