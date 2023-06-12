import createGameboard from "../factories/gameboard";
import createShip from "../factories/ships";

test("place the ship in the rigth position", () => {
  const ship = createShip(3);
  const board = createGameboard();
  expect(board.placeShip(ship, 0, 2, false)).toEqual([
    [0, 2],
    [1, 2],
    [2, 2],
  ]);
});

test("place the ship in the rigth position", () => {
  const ship = createShip(2);
  const board = createGameboard();
  expect(board.placeShip(ship, 1, 2, true)).toEqual([
    [1, 2],
    [1, 3],
  ]);
});

test("Recesive attack", () => {
  const ship = createShip(2);
  const board = createGameboard();
  board.placeShip(ship, 1, 2, true);
  expect(board.receiveAttack(1, 2)).toBe("hit");
});

test("Recesive attack", () => {
  const ship = createShip(2);
  const board = createGameboard();
  board.placeShip(ship, 1, 2, true);
  expect(board.receiveAttack(0, 2)).toBe("miss");
});

test("Recesive attack", () => {
  const ship = createShip(2);
  const board = createGameboard();
  board.placeShip(ship, 1, 2, true);
  board.receiveAttack(1, 2);
  expect(board.receiveAttack(1, 2)).toBe("invalid attack");
});

test("all ships sunk", () => {
  const ship = createShip(2);
  const board = createGameboard();

  board.placeShip(ship, 1, 2, true);

  board.receiveAttack(1, 2);
  expect(board.allShipsSunk()).toBe(false);
});

test("all ships sunk", () => {
  const ship = createShip(2);
  const shipTwo = createShip(2);
  const board = createGameboard();

  board.placeShip(ship, 1, 2, true);
  board.placeShip(shipTwo, 4, 2, false);

  board.receiveAttack(1, 2);
  board.receiveAttack(1, 3);
  board.receiveAttack(4, 2);
  board.receiveAttack(4, 2);
  expect(board.allShipsSunk()).toBe(true);
});
