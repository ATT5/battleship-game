" use strict";
import createShip from "./ships";

function createGameboard() {
  const grid = []; // 2D array to store grid cells
  const missedAttacks = []; // Array to store missed attack coordinates
  const ships = []; // Array to store placed ships

  //build the grid
  for (let i = 0; i < 10; i++) {
    grid.push([]);
    for (let j = 0; j < 10; j++) {
      grid[i].push(null);
    }
  }

  // Public methods
  function placeShip(shipX, x, y, isVertical) {
    if (x < 0 || x > 10 || y < 0 || y > 10)
      return console.log("invalid coordinates");

    const shipInfo = { ship: shipX, coordinates: [] };

    //X coordinates
    if (!isVertical && x + shipX.length <= 10) {
      for (let i = 0; i < shipX.length; i++) {
        if (grid[x + i][y] !== null) return false;
      }

      for (let i = 0; i < shipX.length; i++) {
        grid[x + i][y] = true;
        shipInfo.coordinates.push([x + i, y]);
      }
      ships.push(shipInfo);
    }

    //Y coordinates
    if (isVertical && y + shipX.length <= 10) {
      for (let i = 0; i < shipX.length; i++) {
        if (grid[x][i + y] !== null) return false;
      }

      for (let i = 0; i < shipX.length; i++) {
        grid[x][y + i] = true;
        shipInfo.coordinates.push([x, y + i]);
      }
      ships.push(shipInfo);
    }

    if (shipInfo.coordinates.length === 0) return false;
    console.log(grid);
    return shipInfo;
  }

  function receiveAttack(x, y) {
    if (grid[x][y] === "miss" || grid[x][y] === "hit") return false;

    if (grid[x][y] === null) {
      grid[x][y] = "miss";
      missedAttacks.push([x, y]);
    } else {
      grid[x][y] = "hit";
      ships.forEach((sh) => {
        sh.coordinates.forEach((coor) => {
          if (x === coor[0] && y === coor[1]) {
            sh.ship.hit();
          }
        });
      });
    }

    return grid[x][y];
  }

  function allShipsSunk() {
    function checkIfIssunk(sh) {
      //console.log(sh.ship.isSunk());
      return sh.ship.isSunk();
    }
    return ships.every(checkIfIssunk);
  }
  // Public interface
  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
}

// const b = createGameboard();
// const x = createShip(3);
// const y = createShip(3);
// b.placeShip(x, 0, 0);
// console.log(b.placeShip(y, 4, 0));
// console.log(22);
export default createGameboard;
