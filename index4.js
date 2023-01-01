/* eslint-disable no-alert */

/* Створити функцію, яка прибирає з рядка всі символи,
які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. */

const userWords = prompt('Введите текст:');
const symbolDel = prompt('Введите подряд символы которые вы хотели-бы удалить:');

function cutWords(userTypeWords, symbolDelete) {
  let cutUserWords = '';
  for (let i = 0; i < userTypeWords.length; i += 1) {
    let countSame = 0;
    for (let j = 0; j < symbolDelete.length; j += 1) {
      if (userTypeWords[i] === symbolDelete[j]) {
        countSame += 1;
      }
    }
    if (countSame === 0) {
      cutUserWords += userTypeWords[i];
    }
  }
  return cutUserWords;
}

const cutWord = cutWords(userWords, symbolDel);

alert(`before: ${userWords}
after: ${cutWord}`);
