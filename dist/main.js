/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attack.js":
/*!***********************!*\
  !*** ./src/attack.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pAttack: () => (/* binding */ pAttack)\n/* harmony export */ });\n/* harmony import */ var _shipsPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipsPosition */ \"./src/shipsPosition.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst npcAttack = function () {\r\n  const row = Math.round(Math.random() * 9);\r\n  const col = Math.round(Math.random() * 9);\r\n  const npcPlayer = attack(row, col, _shipsPosition__WEBPACK_IMPORTED_MODULE_0__.pBoard);\r\n  if (!npcPlayer) npcAttack();\r\n};\r\n\r\nconst pAttack = function (cell) {\r\n  const row = Number(cell.getAttribute(\"data-row\"));\r\n  const col = Number(cell.getAttribute(\"data-col\"));\r\n  const realPleyer = attack(row, col, _shipsPosition__WEBPACK_IMPORTED_MODULE_0__.npcBoard);\r\n  if (!realPleyer) return;\r\n  npcAttack();\r\n};\r\n\r\nconst attack = function (row, col, board) {\r\n  const playerAttack = board.receiveAttack(row, col);\r\n\r\n  if (!playerAttack) return;\r\n\r\n  let gridAttacked;\r\n  board === _shipsPosition__WEBPACK_IMPORTED_MODULE_0__.npcBoard ? (gridAttacked = ___WEBPACK_IMPORTED_MODULE_1__.nGrid) : (gridAttacked = ___WEBPACK_IMPORTED_MODULE_1__.grid);\r\n  const el = gridAttacked.querySelector(\r\n    `[data-row=\"${row}\"][data-col=\"${col}\"]`\r\n  );\r\n  if (playerAttack === \"hit\") el.style.backgroundColor = \"red\";\r\n  if (playerAttack === \"miss\") el.style.backgroundColor = \"blue\";\r\n  if (board.allShipsSunk()) gameOver(board);\r\n  return playerAttack;\r\n};\r\n\r\nconst gameOver = function (board) {\r\n  const div = document.querySelector(\".game-over\");\r\n  const p = document.querySelector(\".winner\");\r\n  let text;\r\n  board === _shipsPosition__WEBPACK_IMPORTED_MODULE_0__.npcBoard ? (text = \"You\") : (text = \"Npc\");\r\n  ___WEBPACK_IMPORTED_MODULE_1__.grid.style.display = \"none\";\r\n  ___WEBPACK_IMPORTED_MODULE_1__.nGrid.style.display = \"none\";\r\n  div.style.display = \"flex\";\r\n  p.textContent += `${text} win`;\r\n};\r\n\r\nconst reset = document.querySelector(\".reset\");\r\n\r\nreset.addEventListener(\"click\", function () {\r\n  location.reload();\r\n});\r\n\n\n//# sourceURL=webpack://battleship-project/./src/attack.js?");

/***/ }),

/***/ "./src/createGrid.js":
/*!***************************!*\
  !*** ./src/createGrid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst createGrid = function (grid) {\r\n  for (let row = 0; row < 10; row++) {\r\n    for (let col = 0; col < 10; col++) {\r\n      const cell = document.createElement(\"div\");\r\n      cell.className = `cell`;\r\n      cell.setAttribute(\"data-row\", row);\r\n      cell.setAttribute(\"data-col\", col);\r\n      grid.appendChild(cell);\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGrid);\r\n\n\n//# sourceURL=webpack://battleship-project/./src/createGrid.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/factories/ships.js\");\n\" use strict\";\r\n\r\n\r\nfunction createGameboard() {\r\n  const grid = []; // 2D array to store grid cells\r\n  const missedAttacks = []; // Array to store missed attack coordinates\r\n  const ships = []; // Array to store placed ships\r\n\r\n  //build the grid\r\n  for (let i = 0; i < 10; i++) {\r\n    grid.push([]);\r\n    for (let j = 0; j < 10; j++) {\r\n      grid[i].push(null);\r\n    }\r\n  }\r\n\r\n  // Public methods\r\n  function placeShip(shipX, x, y, isVertical) {\r\n    if (x < 0 || x > 10 || y < 0 || y > 10)\r\n      return console.log(\"invalid coordinates\");\r\n\r\n    const shipInfo = { ship: shipX, coordinates: [] };\r\n\r\n    //X coordinates\r\n    if (!isVertical && x + shipX.length <= 10) {\r\n      for (let i = 0; i < shipX.length; i++) {\r\n        if (grid[x + i][y] !== null) return false;\r\n      }\r\n\r\n      for (let i = 0; i < shipX.length; i++) {\r\n        grid[x + i][y] = true;\r\n        shipInfo.coordinates.push([x + i, y]);\r\n      }\r\n      ships.push(shipInfo);\r\n    }\r\n\r\n    //Y coordinates\r\n    if (isVertical && y + shipX.length <= 10) {\r\n      for (let i = 0; i < shipX.length; i++) {\r\n        if (grid[x][i + y] !== null) return false;\r\n      }\r\n\r\n      for (let i = 0; i < shipX.length; i++) {\r\n        grid[x][y + i] = true;\r\n        shipInfo.coordinates.push([x, y + i]);\r\n      }\r\n      ships.push(shipInfo);\r\n    }\r\n\r\n    if (shipInfo.coordinates.length === 0) return false;\r\n    console.log(grid);\r\n    return shipInfo;\r\n  }\r\n\r\n  function receiveAttack(x, y) {\r\n    if (grid[x][y] === \"miss\" || grid[x][y] === \"hit\") return false;\r\n\r\n    if (grid[x][y] === null) {\r\n      grid[x][y] = \"miss\";\r\n      missedAttacks.push([x, y]);\r\n    } else {\r\n      grid[x][y] = \"hit\";\r\n      ships.forEach((sh) => {\r\n        sh.coordinates.forEach((coor) => {\r\n          if (x === coor[0] && y === coor[1]) {\r\n            sh.ship.hit();\r\n          }\r\n        });\r\n      });\r\n    }\r\n\r\n    return grid[x][y];\r\n  }\r\n\r\n  function allShipsSunk() {\r\n    function checkIfIssunk(sh) {\r\n      //console.log(sh.ship.isSunk());\r\n      return sh.ship.isSunk();\r\n    }\r\n    return ships.every(checkIfIssunk);\r\n  }\r\n  // Public interface\r\n  return {\r\n    placeShip,\r\n    receiveAttack,\r\n    allShipsSunk,\r\n  };\r\n}\r\n\r\n// const b = createGameboard();\r\n// const x = createShip(3);\r\n// const y = createShip(3);\r\n// b.placeShip(x, 0, 0);\r\n// console.log(b.placeShip(y, 4, 0));\r\n// console.log(22);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);\r\n\n\n//# sourceURL=webpack://battleship-project/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strict \";\r\n\r\nfunction Player() {\r\n  const attackCoordinates = [];\r\n\r\n  function attack(enemyBoard, x, y) {\r\n    const PlayerAttack = enemyBoard.receiveAttack(x, y);\r\n    attackCoordinates.push([x, y]);\r\n    return PlayerAttack;\r\n  }\r\n\r\n  function randomAttack(playerBoard) {\r\n    const x = Math.floor(Math.random() * 10);\r\n    const y = Math.floor(Math.random() * 10);\r\n    // console.log(x);\r\n    // console.log(y);\r\n    console.log([x, y]);\r\n    const npcAtttack = playerBoard.receiveAttack(x, y);\r\n    if (npcAtttack === \"invaid attack\") {\r\n      console.log(x, y);\r\n      console.log(50);\r\n      return randomAttack(enemyBoard);\r\n    }\r\n\r\n    return npcAtttack;\r\n  }\r\n  return {\r\n    attack,\r\n    randomAttack,\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleship-project/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ships.js":
/*!********************************!*\
  !*** ./src/factories/ships.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction createShip(length) {\r\n  const ship = {\r\n    length: length,\r\n    hits: 0,\r\n    isSunk: function () {\r\n      return this.hits === this.length;\r\n    },\r\n    hit: function () {\r\n      this.hits++;\r\n    },\r\n  };\r\n\r\n  return ship;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);\r\n\n\n//# sourceURL=webpack://battleship-project/./src/factories/ships.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   grid: () => (/* binding */ grid),\n/* harmony export */   nGrid: () => (/* binding */ nGrid),\n/* harmony export */   npcShips: () => (/* binding */ npcShips)\n/* harmony export */ });\n/* harmony import */ var _factories_ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/ships */ \"./src/factories/ships.js\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n/* harmony import */ var _createGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGrid */ \"./src/createGrid.js\");\n/* harmony import */ var _shipsPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipsPosition */ \"./src/shipsPosition.js\");\n/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attack */ \"./src/attack.js\");\n\r\n\r\n\r\n\r\n\r\n////////////////////////////////////////////////////////////////////\r\n\r\n//selectors\r\nconst grid = document.querySelector(\".p-grid\");\r\nconst nGrid = document.querySelector(\".n-grid\");\r\nconst btn = document.querySelector(\".flip\");\r\nconst selectGrid = document.querySelector(\".place-grid\");\r\n\r\n//grids\r\nconst playerGrid = (0,_createGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(grid);\r\nconst npcGrid = (0,_createGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(nGrid);\r\nconst firstGrid = (0,_createGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectGrid);\r\nconst cells = document.querySelectorAll(\".cell\"); //needs to be hire\r\nconst npcCells = nGrid.querySelectorAll(\".cell\");\r\n\r\n//players\r\nconst player = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst npc = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n//player ships\r\nconst pShip1 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\r\nconst pShip2 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\r\nconst pShip3 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\nconst pShip4 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\nconst pShip5 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\r\nconst playerShips = [pShip1, pShip2, pShip3, pShip4, pShip5];\r\n\r\n//npc ships\r\nconst npcShip1 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\r\nconst npcShip2 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\r\nconst npcShip3 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\nconst npcShip4 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\nconst npcShip5 = (0,_factories_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\r\nconst npcShips = [npcShip1, npcShip2, npcShip3, npcShip4, npcShip5];\r\n\r\n//rotate the ship\r\nlet diretion = false;\r\nbtn.addEventListener(\"click\", function () {\r\n  diretion === false ? (diretion = true) : (diretion = false);\r\n  btn.textContent === \"Horizontal\"\r\n    ? (btn.textContent = \"Vertical\")\r\n    : (btn.textContent = \"Horizontal\");\r\n  btn.textContent !== \"Horizontal\"\r\n    ? (btn.style.backgroundColor = \"rgb(57, 209, 171)\")\r\n    : (btn.style.backgroundColor = \"rgb(61, 173, 61);\");\r\n});\r\n\r\ncells.forEach((cell) => {\r\n  cell.addEventListener(\"click\", function () {\r\n    (0,_shipsPosition__WEBPACK_IMPORTED_MODULE_3__.selectPosition)(cell, playerShips, diretion);\r\n  });\r\n});\r\n\r\nnpcCells.forEach((cell) => {\r\n  cell.addEventListener(\"click\", function () {\r\n    (0,_attack__WEBPACK_IMPORTED_MODULE_4__.pAttack)(cell);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://battleship-project/./src/index.js?");

/***/ }),

/***/ "./src/shipsPosition.js":
/*!******************************!*\
  !*** ./src/shipsPosition.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   npcBoard: () => (/* binding */ npcBoard),\n/* harmony export */   pBoard: () => (/* binding */ pBoard),\n/* harmony export */   selectPosition: () => (/* binding */ selectPosition)\n/* harmony export */ });\n/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/gameboard */ \"./src/factories/gameboard.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/////////////////////////////////////////////////////////////////////////\r\n//Game boards\r\nconst pBoard = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst npcBoard = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n/////////////////////////////////////////////////\r\nconst selectShipBoard = document.querySelector(\".select-position\");\r\n\r\n//var\r\nlet num = 0;\r\n\r\n//Npc ships\r\nconst createNpcShip = function (ship) {\r\n  const randomNum = Math.round(Math.random());\r\n  let position;\r\n  const row = Math.floor(Math.random() * 9) + 1;\r\n  const col = Math.floor(Math.random() * 9) + 1;\r\n  randomNum === 1 ? (position = true) : (position = false);\r\n  const newNpcShip = npcBoard.placeShip(ship, row, col, position);\r\n\r\n  if (!newNpcShip) createNpcShip(ship);\r\n  return newNpcShip;\r\n};\r\n\r\nconst randomShips = function (ships) {\r\n  ships.forEach((sh) => {\r\n    let ship = createNpcShip(sh);\r\n  });\r\n};\r\n\r\n//player ships\r\nconst selectPosition = function (cell, playerShips, diretion) {\r\n  if (cell.parentElement.className !== \"place-grid\") return;\r\n  if (num === 5) return;\r\n\r\n  const row = Number(cell.getAttribute(\"data-row\"));\r\n  const col = Number(cell.getAttribute(\"data-col\"));\r\n\r\n  const newShip = pBoard.placeShip(playerShips[num], row, col, diretion);\r\n  if (newShip === false) return;\r\n  if (\r\n    Number(cell.getAttribute(\"data-row\")) === row &&\r\n    Number(cell.getAttribute(\"data-col\")) === col\r\n  ) {\r\n    for (let i = 0; i < newShip.coordinates.length; i++) {\r\n      const placeGCell = document.querySelector(\r\n        `[data-row=\"${newShip.coordinates[i][0]}\"][data-col=\"${newShip.coordinates[i][1]}\"]`\r\n      );\r\n      const playerCell = ___WEBPACK_IMPORTED_MODULE_1__.grid.querySelector(\r\n        `[data-row=\"${newShip.coordinates[i][0]}\"][data-col=\"${newShip.coordinates[i][1]}\"]`\r\n      );\r\n      playerCell.classList.add(\"ship\");\r\n      placeGCell.classList.add(\"ship\");\r\n    }\r\n    !newShip ? num : num++;\r\n    displayNone(num);\r\n  }\r\n};\r\n\r\nfunction displayNone(num) {\r\n  if (num === 5) {\r\n    selectShipBoard.style.display = \"none\";\r\n    ___WEBPACK_IMPORTED_MODULE_1__.nGrid.style.display = \"grid\";\r\n    ___WEBPACK_IMPORTED_MODULE_1__.grid.style.display = \"grid\";\r\n    randomShips(___WEBPACK_IMPORTED_MODULE_1__.npcShips);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship-project/./src/shipsPosition.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;