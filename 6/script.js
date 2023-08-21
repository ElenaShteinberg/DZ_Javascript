
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const superLink = document.getElementById('super_link');
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLink = document.querySelectorAll('.card-link')
for (let i = 0; i < cardLink.length; i++) {
    document.querySelectorAll('.card-link')[i].textContent = "ссылка";
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const elem = document.querySelectorAll('.card-body .card-link')
console.log(elem);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const element = document.querySelector('[data-number="50"]');
console.log(element);

// 5. Выведите содержимое тега title в консоль.

const title = document.querySelector('.card-title');
console.log(title.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const titleTwo = document.querySelector('.card-title');
console.log(titleTwo.parentNode);

// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const hello = document.createElement('p');
hello.textContent = 'Привет';
const block = document.querySelector('.card');
block.insertBefore(hello, block.firstChild);
console.log(block);

// 8. Удалите тег h6 на странице.

const titleMini = document.querySelector('h6');
titleMini.remove();