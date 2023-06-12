"use strict";

import createGameboard from "./factories/gameboard";
import { grid } from ".";
import { npcShips } from ".";
import { nGrid } from ".";
/////////////////////////////////////////////////////////////////////////
//Game boards
export const pBoard = createGameboard();
export const npcBoard = createGameboard();
/////////////////////////////////////////////////
const selectShipBoard = document.querySelector(".select-position");

//var
let num = 0;

//Npc ships
const createNpcShip = function (ship) {
  const randomNum = Math.round(Math.random());
  let position;
  const row = Math.floor(Math.random() * 9) + 1;
  const col = Math.floor(Math.random() * 9) + 1;
  randomNum === 1 ? (position = true) : (position = false);
  const newNpcShip = npcBoard.placeShip(ship, row, col, position);

  if (!newNpcShip) createNpcShip(ship);
  return newNpcShip;
};

const randomShips = function (ships) {
  ships.forEach((sh) => {
    let ship = createNpcShip(sh);
  });
};

//player ships
export const selectPosition = function (cell, playerShips, diretion) {
  if (cell.parentElement.className !== "place-grid") return;
  if (num === 5) return;

  const row = Number(cell.getAttribute("data-row"));
  const col = Number(cell.getAttribute("data-col"));

  const newShip = pBoard.placeShip(playerShips[num], row, col, diretion);
  if (newShip === false) return;
  if (
    Number(cell.getAttribute("data-row")) === row &&
    Number(cell.getAttribute("data-col")) === col
  ) {
    for (let i = 0; i < newShip.coordinates.length; i++) {
      const placeGCell = document.querySelector(
        `[data-row="${newShip.coordinates[i][0]}"][data-col="${newShip.coordinates[i][1]}"]`
      );
      const playerCell = grid.querySelector(
        `[data-row="${newShip.coordinates[i][0]}"][data-col="${newShip.coordinates[i][1]}"]`
      );
      playerCell.classList.add("ship");
      placeGCell.classList.add("ship");
    }
    !newShip ? num : num++;
    displayNone(num);
  }
};

function displayNone(num) {
  if (num === 5) {
    selectShipBoard.style.display = "none";
    nGrid.style.display = "grid";
    grid.style.display = "grid";
    randomShips(npcShips);
  }
}
