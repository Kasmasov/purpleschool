'use strict'

let wetherMap = new Map ([
    ['London', 10],
    ['Moscow', 7],
    ['Paris', 14],
])

// поменять местами ключи и значения
const changeValuesToKeys = new Map([...wetherMap].map((item) => item.reverse()))
console.log(changeValuesToKeys);