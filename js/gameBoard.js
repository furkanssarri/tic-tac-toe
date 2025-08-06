export const gameBoardModule = (function () {
   const gameBoard = [];
   function _initializeGameBoard (id) {
      let counter = 0;
      for (let i = 0; i < id; i++) {
         gameBoard.push("");
      }
      const gameArea = document.querySelector("#gameArea");
      gameBoard.forEach((index, id) => {
         let cell = document.createElement("div");
         cell.className = "cell";
         cell.id = counter;
         gameArea.appendChild(cell);
         counter++;
      });
      return gameBoard;
   }
   const setGameBoard = (id) => _initializeGameBoard(id);
   const getGameBoard = () => gameBoard;
   
   return {
      setGameBoard,
      getGameBoard,
   }
})();