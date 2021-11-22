/**
 1. Запросите у пользователя его имя и выведите в ответ:
 «Привет, его имя!».
 * */
function printName() {
    let yourName = prompt("enter your name");
    alert("Привет, " + yourName);
}

/**
 * 2. Запросите у пользователя год его рождения, посчитайте,
 сколько ему лет и выведите результат. Текущий год укажите
 в коде как константу.
 */

function countAge() {
    let yearOfBirth = prompt("enter your year of birth ");
    const currentYear = new Date().getFullYear();
    if (yearOfBirth < 0 || yearOfBirth > currentYear) {
        alert("enter the correct year");
    } else {
        alert("your age is " + (2021 - parseInt(yearOfBirth)));
    }
}

/**
 * 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
 */

function perimeter() {
    let sideOfSquare = prompt("enter side of a square ");
    let perimeter = (parseInt(sideOfSquare) * 4);
    alert("Perimeter of square = " + perimeter);
}

/**
 * 4. Запросите у пользователя радиус окружности и выведите
 площадь такой окружности
 */

function squareOfCircle() {
    let radiusOfCircle = prompt("enter radius of circle");
    let square = (Math.PI * Math.pow(parseInt(radiusOfCircle), 2));
    alert("square of circle = " + square);
}

/**
 * 5. Запросите у пользователя расстояние в км между двумя
 городами и за сколько часов он хочет добраться. Посчитайте скорость,
 с которой необходимо двигаться, чтобы успеть вовремя.
 */

function speed() {
    let distanceBetweenCities = prompt("enter the distance between cities");
    let timeOfTravel = prompt("enter the time of travel");
    alert("drive at a speed of " + distanceBetweenCities / timeOfTravel + "km/h");
}

/**
 * 6. Реализуйте конвертор валют. Пользователь вводит доллары,
 * программа переводит в евро. Курс валюты храните в константе.
 */
function convert() {
    let dollars = prompt("enter  dollars");
    const rate = {
        usd: 1.13,
        eur: 0.88
    };
    if (dollars < 1) {
        alert("cannot be less than 1");
    } else {
        alert("covert to euro " + dollars * rate["eur"]);
    }
}

/**
 * 7. Пользователь указывает объем флешки в Гб. Программа
 должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
 */

function fleshGB() {
    let gbFlesh = prompt("enter the flash size(GB)");
    const countFiles = 820;
    alert("the flash card can store " + Math.trunc(parseInt(gbFlesh) * 1024 / countFiles) + " files of 820MB each");
}

/**
 * 8. Пользователь вводит сумму денег в кошельке и цену одной
 шоколадки. Программа выводит сколько шоколадок может
 купить пользователь и сколько сдачи у него останется.
 */

function countChocolates() {
    let amountOfMoney = prompt("enter the amount of money in the wallet");
    let chocolate = prompt("enter the price of 1 chocolate");
    let countChocolates = (amountOfMoney / chocolate) - (amountOfMoney / chocolate) % 1;
    let left = amountOfMoney - countChocolates * chocolate;
    alert("you can buy " + countChocolates + " chocolates");
    alert("left in wallet " + left);
}

/**
 * 9. Запросите у пользователя трехзначное число и выведите
 его задом наперед. Для решения задачи вам понадобится
 оператор % (остаток от деления).
 */

function reverseNumber() {
    let number = prompt("enter three-digit number");
    let first = number % 10
    let second = Math.floor((number % 100) / 10);
    let third = Math.floor((number % 1000) / 100);
    alert(`${first}${second}${third}`);
}

/**
 * 10. Запросите у пользователя целое число и выведите в ответ,
 четное число или нет. В задании используйте логические
 операторы. В задании не надо использовать if или switch
 */

function evenOdd() {
    let intNumb = prompt("enter the integer number");
    return (intNumb % 2 === 0) ? alert(intNumb + " is even") : alert(intNumb + " is odd");
}