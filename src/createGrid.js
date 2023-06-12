"use strict";

const createGrid = function (grid) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("div");
      cell.className = `cell`;
      cell.setAttribute("data-row", row);
      cell.setAttribute("data-col", col);
      grid.appendChild(cell);
    }
  }
};

export default createGrid;
