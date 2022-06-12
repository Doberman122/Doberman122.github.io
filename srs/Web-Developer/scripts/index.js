"use strict"

alert("Вы успешно зашли на сайт!.")

if (confirm("Вам нужно создать веб-сайт?")) {
    console.log("Да.");
} else {
    console.log("Нет");
};

let name = prompt("Какой тип сайта вам нужен?");
console.log(name);