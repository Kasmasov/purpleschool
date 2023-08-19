'use strict'

let wetherMap = new Map ([
    ['London', 10],
    ['Moscow', 7],
    ['Paris', 14],
])

// поменять местами ключи и значения
const changeValuesToKeys = new Map([...wetherMap].map((item) => item.reverse()))
// console.log(changeValuesToKeys);

// Сделать с помощью Set уникализацию массива обектов

const users = [
    { id: 1, name: 'Вася'},
    { id: 2, name: 'Петя'},
    { id: 1, name: 'Вася'},
];

const uniqueUsersById = [...new Set(users.map((user) => user.id))]
  .map((userId) => users.find((user) => userId === user.id));

console.log(uniqueUsersById);

