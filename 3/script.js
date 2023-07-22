// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function numberCubed (number) {
//     return number*number*number;
// }

// console.log(numberCubed(2));
// console.log(numberCubed(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function salary (number) {
    return number*0.87;
}

let number = Number(prompt('Введите число'));
if (isNaN(salary(number))) console.log('Вы ввели неверное значение');
else console.log(salary(number));


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function maxNumber(number1, number2, number3) {
// let max = number1;
// if (max < number2) max=number2;
// if (max < number3) max=number3;
// console.log(`Максимальное число ${max}`);
// }

// let number1 = Number(prompt('Введите первое число'));
// let number2 = Number(prompt('Введите второе число'));
// let number3 = Number(prompt('Введите третье число'));
// maxNumber(number1, number2, number3);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// function sum(number1, number2) {
//     return number1+number2;
// }

// function difference(number1, number2) {
//     if (number1 > number2) return number1-number2;
//     else return number2-number1;
// }

// function multiplication(number1, number2) {
//     return number1*number2;
// }   

// function division(number1, number2) {
//     return number1/number2;
// }

// let number1 = Number(prompt('Введите первое число'));
// let number2 = Number(prompt('Введите второе число'));
// console.log(`Сумма чисел равна ${sum(number1, number2)}`);
// console.log(`Разность чисел равна ${difference(number1, number2)}`);
// console.log(`Произведение чисел равно ${multiplication(number1, number2)}`);
// console.log(`Частное чисел равно ${division(number1, number2)}`);