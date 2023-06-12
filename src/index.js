import createShip from "./factories/ships";
import Player from "./factories/player";
import createGrid from "./createGrid";
import { selectPosition } from "./shipsPosition";
import { pAttack } from "./attack";
////////////////////////////////////////////////////////////////////

//selectors
export const grid = document.querySelector(".p-grid");
export const nGrid = document.querySelector(".n-grid");
const btn = document.querySelector(".flip");
const selectGrid = document.querySelector(".place-grid");

//grids
const playerGrid = createGrid(grid);
const npcGrid = createGrid(nGrid);
const firstGrid = createGrid(selectGrid);
const cells = document.querySelectorAll(".cell"); //needs to be hire
const npcCells = nGrid.querySelectorAll(".cell");

//players
const player = Player();
const npc = Player();

//player ships
const pShip1 = createShip(5);
const pShip2 = createShip(4);
const pShip3 = createShip(3);
const pShip4 = createShip(3);
const pShip5 = createShip(2);
const playerShips = [pShip1, pShip2, pShip3, pShip4, pShip5];

//npc ships
const npcShip1 = createShip(5);
const npcShip2 = createShip(4);
const npcShip3 = createShip(3);
const npcShip4 = createShip(3);
const npcShip5 = createShip(2);
export const npcShips = [npcShip1, npcShip2, npcShip3, npcShip4, npcShip5];

//rotate the ship
let diretion = false;
btn.addEventListener("click", function () {
  diretion === false ? (diretion = true) : (diretion = false);
  btn.textContent === "Horizontal"
    ? (btn.textContent = "Vertical")
    : (btn.textContent = "Horizontal");
  btn.textContent !== "Horizontal"
    ? (btn.style.backgroundColor = "rgb(57, 209, 171)")
    : (btn.style.backgroundColor = "rgb(61, 173, 61);");
});

cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    selectPosition(cell, playerShips, diretion);
  });
});

npcCells.forEach((cell) => {
  cell.addEventListener("click", function () {
    pAttack(cell);
  });
});
