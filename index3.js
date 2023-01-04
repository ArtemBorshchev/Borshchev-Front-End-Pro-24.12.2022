/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-alert */

function createArray(Arr) {
  const arrLength = prompt('Введіть кількість масивів:');
  for (let i = 0; i < arrLength; i += 1) {
    Arr[i] = [];
    Arr[i].length = [prompt(`Введіть довжину ${i + 1} масиву:`)];
    for (let j = 0; j < Arr[i].length; j += 1) {
      Arr[i][j] = prompt(`Введіть знаення ${j} елементу ${i + 1} масиву:`);
    }
  }
  return Arr;
}
const DoubleArray = [[]];
console.log(createArray(DoubleArray));
