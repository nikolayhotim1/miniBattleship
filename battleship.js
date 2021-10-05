'use strict';
// Объявления переменных
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) { // ЦИКЛ: пока корабль не будет потоплен
    if (guess == location1) { // ЕСЛИ выстрел попал в корабль
        location1 = null; // присваиваем данной клетке статус "уже подбита"
    } else if (guess == location2) {
        location2 = null;
    } else if (guess == location3) {
        location3 = null;
    }
    
    guess = prompt('Ready, aim, fire! (enter a number 0-6):'); // ПОЛУЧИТЬ координаты выстрела

    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses += 1; // ПРИБАВИТЬ один к guesses

        if ((guess == location1 && location1 !== null) || (guess == location2 && location2 !== null) || (guess == location3 && location3 !== null)) { // ЕСЛИ выстрел попал в корабль и не попал в уже подбитую клетку
            hits += 1; // ПРИБАВИТь один к количеству попаданий
            alert('HIT!');

            if (hits === 3) { // ЕСЛИ количество попаданий равно трём
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