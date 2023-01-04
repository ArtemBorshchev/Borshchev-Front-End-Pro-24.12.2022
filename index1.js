/* eslint-disable no-console */

const ArrayUsed = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];

function findMean(Arr) {
  let sumOfElements = 0;
  let countOfelements = 0;
  for (let i = 0; i < Arr.length; i += 1) {
    if (typeof (Arr[i]) === typeof (1)) {
      sumOfElements += Arr[i];
      countOfelements += 1;
    }
  }
  return sumOfElements / countOfelements;
}
const meanOfElement = findMean(ArrayUsed);
console.log(meanOfElement);
