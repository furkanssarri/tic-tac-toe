const gameModule = (function () {
   const winningPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
   ];
   const playerX = playerModule.setPlayers("Player X", "X");
   const playerO = playerModule.setPlayers("Player O", "O");
   const board = gameBoardModule.setGameBoard(9);
   let currentPlayer = playerX;
   let gameRunning = false;

   function _changePlayer() {
      currentPlayer = (currentPlayer === playerX) ? playerO : playerX;
   }

   function _checkWinner(symbol) {
      for (const pattern of winningPatterns) {
         if (pattern.every(index => board[index] === symbol)) {
            return true;
         }
      }
      return false;
   }

   function _declareWinner() {
      if (_checkWinner("X")) {
         console.log(`The ${playerX.name} wins.`);
      } else if (_checkWinner("O")) {
         console.log(`The ${playerO.name} wins.`);
      }
   }

   
   const getPlayer = () => currentPlayer;
   const setPlayer = () => _changePlayer();
   const getDeclareWinner = () => _declareWinner();
   return {
      getPlayer,
      setPlayer,
      getDeclareWinner,
   }
})();