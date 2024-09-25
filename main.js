const mainModule = (function () {
   const cells = document.querySelectorAll(".cell");

   cells.forEach(cell => {
      cell.addEventListener("click", updateCell);
   });

   function updateCell(e) {
      const cellIndex = e.target.id;
      const currentCell = document.getElementById(cellIndex);
      if (!!currentCell.textContent) { // to check if the cell was already used
         return
      } else {
         e.target.textContent = gameModule.getPlayer().mark
         // let gameBoardArr = gameModule.board;
         let arr = gameBoardModule.getGameBoard(9);
         arr.splice(cellIndex, 1, gameModule.getPlayer().mark);
         gameModule.setPlayer();
         gameModule.getDeclareWinner();
      }
   }
})();