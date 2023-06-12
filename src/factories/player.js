"use strict ";

function Player() {
  const attackCoordinates = [];

  function attack(enemyBoard, x, y) {
    const PlayerAttack = enemyBoard.receiveAttack(x, y);
    attackCoordinates.push([x, y]);
    return PlayerAttack;
  }

  function randomAttack(playerBoard) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    // console.log(x);
    // console.log(y);
    console.log([x, y]);
    const npcAtttack = playerBoard.receiveAttack(x, y);
    if (npcAtttack === "invaid attack") {
      console.log(x, y);
      console.log(50);
      return randomAttack(enemyBoard);
    }

    return npcAtttack;
  }
  return {
    attack,
    randomAttack,
  };
}

export default Player;
