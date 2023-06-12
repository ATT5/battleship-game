import Player from "../factories/player";
import createGameboard from "../factories/gameboard";
import createShip from "../factories/ships";

test("attack the enemy", () => {
  const sh = createShip(3);
  const board = createGameboard();
  const pl = Player();

  board.placeShip(sh, 3, 3, true);

  expect(pl.attack(board, 3, 3)).toBe("hit");
});

test("attack the enemy", () => {
  const sh = createShip(3);
  const board = createGameboard();
  const pl = Player();

  board.placeShip(sh, 3, 3, true);

  expect(pl.attack(board, 1, 3)).toBe("miss");
});

test("attack the enemy", () => {
  const sh = createShip(3);
  const board = createGameboard();
  const pl = Player();

  board.placeShip(sh, 3, 3, true);
  pl.attack(board, 1, 3);
  expect(pl.attack(board, 1, 3)).toBe("invalid attack");
});

test("attack the enemy", () => {
  const sh = createShip(3);
  const board = createGameboard();
  const pl = Player();

  board.placeShip(sh, 3, 3, true);

  expect(pl.randomAttack(board)).toBe(pl.randomAttack(board));
});
