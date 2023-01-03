/* eslint-disable no-console */

const users = [
  {
    index: 0,
    isActive: true,
    balance: '$2,226.60',
    name: 'Eugenia Sawyer',
    gender: 'female',
    phone: '+1 (840) 583-3207',
    address: '949 John Street, Rose, Puerto Rico, 1857',
  },
  {
    index: 1,
    isActive: true,
    balance: '$2,613.77',
    name: 'Pauline Gallegos',
    gender: 'female',
    phone: '+1 (985) 593-3328',
    address: '328 Greenpoint Avenue, Torboy, North Dakota, 6857',
  },
  {
    index: 2,
    isActive: false,
    balance: '$3,976.41',
    name: 'Middleton Chaney',
    gender: 'male',
    phone: '+1 (995) 591-2478',
    address: '807 Fleet Walk, Brutus, Arkansas, 9783',
  },
  {
    index: 3,
    isActive: true,
    balance: '$1,934.58',
    name: 'Burns Poole',
    gender: 'male',
    phone: '+1 (885) 559-3422',
    address: '730 Seba Avenue, Osage, Alabama, 6290',
  },
  {
    index: 4,
    isActive: true,
    balance: '$3,261.65',
    name: 'Mcfadden Horne',
    gender: 'male',
    phone: '+1 (942) 565-3988',
    address: '120 Scholes Street, Kirk, Michigan, 1018',
  },
  {
    index: 5,
    isActive: false,
    balance: '$1,790.56',
    name: 'Suzette Lewis',
    gender: 'female',
    phone: '+1 (837) 586-3283',
    address: '314 Dunne Place, Bawcomville, Guam, 9053',
  },
];

const ArrBalances = [];
const ArrPhones = [];
let sumOfBalances = 0;
for (let i = 0; i < users.length; i += 1) {
  ArrBalances.push('');
  for (let j = 0; j < users[i].balance.length; j += 1) {
    if (Number(users[i].balance[j])) {
      ArrBalances[i] += users[i].balance[j];
    }
  }
}
for (let i = 0; i < ArrBalances.length; i += 1) {
  if (+ArrBalances[i] / 100 > 2000) {
    ArrPhones.push(users[i].phone);
  }
  sumOfBalances += (+ArrBalances[i] / 100);
}
sumOfBalances = +sumOfBalances.toFixed(2);

let str = '<div>';
for (let i = 0; i < ArrPhones.length; i += 1) {
  str += `<ol>${ArrPhones[i]}</ol>`;
  if ((i + 1) === ArrPhones.length) {
    str += `<ol>сума балансів = ${sumOfBalances} USD </ol>`;
  }
}
str += '</div>';
document.getElementById('go1').innerHTML = str;

// const users = [
//   {
//     index: 0,
//     isActive: true,
//     balance: '$2,226.60',
//     name: 'Eugenia Sawyer',
//     gender: 'female',
//     phone: '+1 (840) 583-3207',
//     address: '949 John Street, Rose, Puerto Rico, 1857',
//   },
//   {
//     index: 1,
//     isActive: true,
//     balance: '$2,613.77',
//     name: 'Pauline Gallegos',
//     gender: 'female',
//     phone: '+1 (985) 593-3328',
//     address: '328 Greenpoint Avenue, Torboy, North Dakota, 6857',
//   },
//   {
//     index: 2,
//     isActive: false,
//     balance: '$3,976.41',
//     name: 'Middleton Chaney',
//     gender: 'male',
//     phone: '+1 (995) 591-2478',
//     address: '807 Fleet Walk, Brutus, Arkansas, 9783',
//   },
//   {
//     index: 3,
//     isActive: true,
//     balance: '$1,934.58',
//     name: 'Burns Poole',
//     gender: 'male',
//     phone: '+1 (885) 559-3422',
//     address: '730 Seba Avenue, Osage, Alabama, 6290',
//   },
//   {
//     index: 4,
//     isActive: true,
//     balance: '$3,261.65',
//     name: 'Mcfadden Horne',
//     gender: 'male',
//     phone: '+1 (942) 565-3988',
//     address: '120 Scholes Street, Kirk, Michigan, 1018',
//   },
//   {
//     index: 5,
//     isActive: false,
//     balance: '$1,790.56',
//     name: 'Suzette Lewis',
//     gender: 'female',
//     phone: '+1 (837) 586-3283',
//     address: '314 Dunne Place, Bawcomville, Guam, 9053',
//   },
// ];

// const ArrBalances = [];
// const ArrPhones = [];
// let sumOfBalances = 0;
// for (let i = 0; i < users.length; i += 1) {
//   ArrBalances.push('');
//   for (let j = 0; j < users[i].balance.length; j += 1) {
//     if (Number(users[i].balance[j])) {
//       ArrBalances[i] += users[i].balance[j];
//     }
//   }
// }
// for (let i = 0; i < ArrBalances.length; i += 1) {
//   if (+ArrBalances[i] / 100 > 2000) {
//     ArrPhones.push(users[i].phone);
//   }
//   sumOfBalances += (+ArrBalances[i] / 100);
// }
// sumOfBalances = +sumOfBalances.toFixed(2);
// console.log(ArrPhones);
// console.log(sumOfBalances);

// // щоб не збирати телефони в окремий масив
// for (let i = 0; i < users.length; i += 1) {
//   for (let j = 0; j < 2; j += 1) {
//     if (j === 0) {
//       console.log(+ArrBalances[i] / 100);
//     } else if (j === 1) {
//       if (+ArrBalances[i] / 100 > 2000) {
//         console.log(users[i].phone);
//       }
//     }
//   }
// }
