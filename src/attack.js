"use strict";
import { npcBoard } from "./shipsPosition";
import { nGrid } from ".";
import { grid } from ".";
import { pBoard } from "./shipsPosition";

const npcAttack = function () {
  const row = Math.round(Math.random() * 9);
  const col = Math.round(Math.random() * 9);
  const npcPlayer = attack(row, col, pBoard);
  if (!npcPlayer) npcAttack();
};

export const pAttack = function (cell) {
  const row = Number(cell.getAttribute("data-row"));
  const col = Number(cell.getAttribute("data-col"));
  const realPleyer = attack(row, col, npcBoard);
  if (!realPleyer) return;
  npcAttack();
};

const attack = function (row, col, board) {
  const playerAttack = board.receiveAttack(row, col);

  if (!playerAttack) return;

  let gridAttacked;
  board === npcBoard ? (gridAttacked = nGrid) : (gridAttacked = grid);
  const el = gridAttacked.querySelector(
    `[data-row="${row}"][data-col="${col}"]`
  );
  if (playerAttack === "hit") el.style.backgroundColor = "red";
  if (playerAttack === "miss") el.style.backgroundColor = "blue";
  if (board.allShipsSunk()) gameOver(board);
  return playerAttack;
};

const gameOver = function (board) {
  const div = document.querySelector(".game-over");
  const p = document.querySelector(".winner");
  let text;
  board === npcBoard ? (text = "You") : (text = "Npc");
  grid.style.display = "none";
  nGrid.style.display = "none";
  div.style.display = "flex";
  p.textContent += `${text} win`;
};

const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
  location.reload();
});
