/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  fireTorpedo();
  firePositions();
  showShips();
  console.log("Nothing yet");
};

let gameBoard = [
  [0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0]
];

function fireTorpedo() {
  gameBoard.map((row, i) => {
    row.map((col, j) => {
      let cell = document.querySelector(`#cell-${i + 1}-${j + 1}`);
      cell.addEventListener("click", () => {
        cell.style.background = col == 1 ? "red" : "gray";
      });
    });
  });
}

function firePositions() {
  let input = document.querySelector("#coordinates");
  let sendCoordinates = document.querySelector("#acceptButton");
  sendCoordinates.addEventListener("click", () => {
    let coordinates = input.value.split(",");
    let row = parseInt(coordinates[0]);
    let col = parseInt(coordinates[1]);
    if (
      !isNaN(row) &&
      !isNaN(col) &&
      row >= 1 &&
      row <= 9 &&
      col >= 1 &&
      col <= 9
    ) {
      let cell = document.querySelector(`#cell-${row}-${col}`);

      if (cell) {
        gameBoard[row - 1][col - 1] == 1
          ? (cell.style.background = "red")
          : (cell.style.background = "gray");
      }
    } else {
      alert("Please, introduce valid coordinates.");
    }
  });
}

function showShips() {
  let button = document.querySelector("#show-ships");
  let isShowing = false;
  button.addEventListener("click", () => {
    gameBoard.map((row, i) => {
      row.map((col, j) => {
        let cell = document.querySelector(`#cell-${i + 1}-${j + 1}`);
        if (col == 1 && cell) {
          cell.style.border = !isShowing
            ? "2px solid orange"
            : "1px solid lightgray";
        }
      });
    });
    isShowing = !isShowing;
  });
}
