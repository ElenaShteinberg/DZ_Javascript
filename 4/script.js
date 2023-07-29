// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i++) {
//     if (i===0) console.log('0 – это ноль');
//     else if (i%2===0) console.log(`${i} - четное число`);
//     else console.log(`${i} - нечетное число`);
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3,2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
//   }

// const arr = [];
// for (let i = 0; i < 5; i++) {
//     arr[i] = getRandomIntInclusive(0, 9)
// }
// console.log(`Массив ${arr}`);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(`Сумма элементов в массиве равна ${sum}`);
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min=arr[i];
// }
// console.log(`Минимальное число массива ${min}`);
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         result++;
//         break;
//     } 
// }
// if (result > 0) console.log('В данном массиве есть число 3');
// else console.log('В данном массиве нет числа 3');

// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
//   }

// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = getRandomIntInclusive(0, 9)
// }
// console.log(`Массив ${arr}`);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) arr[i]=Math.pow(arr[i],2);
//     else if (arr[i]%3===0) arr[i]=Math.pow(arr[i],3);
// }

// console.log(`Новый массив ${arr}`);

// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) result++;
// }
// console.log(`Массив ${arr}`);
// console.log(`Количество цифр 3 в данном массиве ${result}`);

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let result = 'x';
for (let i = 1; i < 21; i++) {
    console.log(result);
    result = result + 'x';
}
