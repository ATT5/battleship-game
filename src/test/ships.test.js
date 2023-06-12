import createShip from "../factories/ships";

test("ship length", () => {
  const ship = createShip(3);
  expect((ship.length = 3)).toEqual(3);
});

test("hits", () => {
  const ship = createShip(3);
  expect((ship.hits = 0)).toBe(0);
});
