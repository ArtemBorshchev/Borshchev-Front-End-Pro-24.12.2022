const ArrNum = [16, -37, 54, -4, 72, -56, 47, 4,
  -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumOfPosElements = 0;
let sumOfPosEvenElements = 0;
let sumOfPosOddElements = 0;
let multyPosElements = 1;
let countOfPosElements = 0;
let countOfNegElements = 0;
let countOfOdd = 0;
let CountOfEven = 0;
let minElement = ArrNum[0];
let maxElement = ArrNum[0];
let indexMinElement = 0;
let indexMaxElement = 0;
for (let i = 0; i < ArrNum.length; i += 1) {
  if (ArrNum[i] >= 0) {
    sumOfPosElements += ArrNum[i];
    multyPosElements *= ArrNum[i];
    countOfPosElements += 1;
    if ((ArrNum[i]) % 2 !== 0) {
      sumOfPosOddElements += ArrNum[i];
      countOfOdd += 1;
    } else {
      sumOfPosEvenElements += ArrNum[i];
      CountOfEven += 1;
    }
  }
  if (ArrNum[i] < 0) {
    countOfNegElements += 1;
  }
  if (ArrNum[i] < minElement) {
    minElement = ArrNum[i];
    indexMinElement = i;
  }
  if (ArrNum[i] > maxElement) {
    maxElement = ArrNum[i];
    indexMaxElement = i;
  }
  if (i === (ArrNum.length - 1)) {
    for (let j = 0; j < ArrNum.length; j += 1) {
      if (j !== indexMaxElement) {
        ArrNum[j] = 0;
      }
    }
  }
}

document.getElementById('out-1').innerHTML = `sum of positive array elements = ${sumOfPosElements},
number of elements = ${countOfPosElements}`;

document.getElementById('out-2').innerHTML = `The MIN array element is: ${minElement},
The index (0. 1. 2...) of MIN element is: ${indexMinElement}, 
sequence number (1. 2. 3...) = ${indexMinElement + 1}`;

document.getElementById('out-3').innerHTML = `The MAX array element is: ${maxElement},
The index (0. 1. 2...) of MAX element is: ${indexMaxElement}, 
sequence number (1. 2. 3...) = ${indexMaxElement + 1}`;

document.getElementById('out-4').innerHTML = `number of elements = ${countOfNegElements}`;

document.getElementById('out-5').innerHTML = `number of POSITIV ODD elements = ${countOfOdd}`;

document.getElementById('out-6').innerHTML = `number of POSITIV EVEN elements = ${CountOfEven}`;

document.getElementById('out-7').innerHTML = `Sum of POSITIV EVEN elements = ${sumOfPosEvenElements}`;

document.getElementById('out-8').innerHTML = `Sum of POSITIV ODD elements = ${sumOfPosOddElements}`;

document.getElementById('out-9').innerHTML = `Multiply of POSITIV elements = ${BigInt(multyPosElements)}`;

document.getElementById('out-10').innerHTML = ArrNum;

//  IF MORE THEN 1 МІN-MAX ELEMENTS
// let ArrMin = [];
// let ArrMax = [];
// for (let i = 0; i < ArrNum.length; i++) {
//     if (minElement === ArrNum[i]) {
//         ArrMin.push(`MIN element = ${ArrNum[i]}, INDEX = ${i}, NUMBER = ${i + 1};`);
//     }
//     else if (maxElement === ArrNum[i]) {
//         ArrMax.push(`MAX element = ${ArrNum[i]}, INDEX = ${i}, NUMBER = ${i + 1};`);
//     }
// }
// document.getElementById('out-2').innerHTML = ArrMin;
// document.getElementById('out-3').innerHTML = ArrMax;
// delete ArrMin;
// delete ArrMax;
