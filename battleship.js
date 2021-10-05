'use strict';
// Объявления переменных
let location1 = 4;
let location2 = 5;
let location3 = 6;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) { // ЦИКЛ: пока корабль не будет потоплен
    guess = prompt('Ready, aim, fire! (enter a number 0-6):'); // ПОЛУЧИТЬ координаты выстрела

    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses += 1; // ПРИБАВИТЬ один к guesses

        if (guess == location1 || guess == location2 || guess == location3) { // ЕСЛИ выстрел попал в корабль
            hits += 1; // ПРИБАВИТь один к количеству попаданий
            alert('HIT!');

            if (hits == 3) { // ЕСЛИ количество попаданий равно трём
                isSunk = true; // ПРИСВОИТЬ isSunk значение true

                alert('You sank my battleship!'); // ВЫВЕСТИ сообщение «Корабль потоплен!»
            }
        } else {
            alert('MISS');
        }
    }
}

// ВЫВЕСТИ результат для пользователя
let stats = `You took ${guesses} guesses to sink the battleship,
which means your shooting accuracy was ${Math.ceil((3 / guesses) * 100)}%.`;

alert(stats);