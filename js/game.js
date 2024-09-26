const gameModule = (function () {
   const playerX = playerModule.setPlayers("Player X", "X");
   const playerO = playerModule.setPlayers("Player O", "O");
   const board = gameBoardModule.setGameBoard(9);
   let currentPlayer = playerX;
   let gameRunning = false;

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

   function startGame() {
      gameRunning = true;
   }

   function _stopGame() {
      gameRunning = false;
   }

   function _restartGame() {
      board.length = 0;
      gameRunning = true;
   }

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
         _stopGame();
         mainModule.printGameOver(playerX.name);
      } else if (_checkWinner("O")) {
         _stopGame();
         mainModule.printGameOver(playerO.name);
      }
   }

   
   const getPlayer = () => currentPlayer;
   const setPlayer = () => _changePlayer();
   const getDeclareWinner = () => _declareWinner();
   const isGameRunning = () => gameRunning;
   const setGameRestart = () => _restartGame();
   return {
      getPlayer,
      setPlayer,
      getDeclareWinner,
      isGameRunning,
      startGame,
      setGameRestart,
   }
})();