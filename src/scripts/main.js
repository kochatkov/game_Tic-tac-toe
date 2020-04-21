'use strict';

const cells = document.querySelectorAll('.cell');
const button = document.querySelector('.button');
const container = document.querySelector('.wrapper__container');
let counter = 0;

for (const cell of cells) {
  cell.addEventListener('click', () => {
    if (cell.innerHTML === 'X'
      || cell.innerHTML === '0') {
      return;
    }
    checkStep(cell);
    check(cell);
    counter++;
  });
}

function check() {
  const boxes = document.getElementsByClassName('cell');
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < arr.length; i++) {
    if (boxes[arr[i][0]].innerHTML === 'X'
      && boxes[arr[i][1]].innerHTML === 'X'
      && boxes[arr[i][2]].innerHTML === 'X') {
      createGame('X');
      restart();
    } else if (boxes[arr[i][0]].innerHTML === '0'
      && boxes[arr[i][1]].innerHTML === '0'
      && boxes[arr[i][2]].innerHTML === '0') {
      createGame('0');
      restart();
    }
  }

  if (counter === 8) {
    createGame('D');

    restart();
  }
}

function checkStep(item) {
  if (counter % 2 === 0) {
    item.innerHTML = `X`;
  } else {
    item.innerHTML = `0`;
  }
}

function createGame(x) {
  const div = document.createElement('div');
  const p = document.createElement('p');

  div.className = 'winner_text';
  p.className = 'winner_paragraph';
  container.append(div);
  div.append(p);

  if (x === 'X') {
    p.textContent = 'X-player, congratulation! You won!';
  }

  if (x === '0') {
    p.textContent = '0-player, congratulation! You won!';
  }

  if (x === 'D') {
    p.textContent = 'Draw!!!';
  }
}

function restart() {
  button.addEventListener('click', () => {
    location.reload();
    counter = 0;
  });
}
