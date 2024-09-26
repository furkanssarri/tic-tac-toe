const mainModule = (function () {
   const cells = document.querySelectorAll(".cell");

   cells.forEach(cell => {
      cell.addEventListener("click", updateCell);
   });
   window.addEventListener("load", () => {
      gameModule.startGame();
   });

   function updateCell(e) {
      const cellIndex = e.target.id;
      const currentCell = document.getElementById(cellIndex);
      if (!!currentCell.textContent || !gameModule.isGameRunning()) { // to check if the cell was already used
         return
      } else {
         e.target.textContent = gameModule.getPlayer().mark
         let arr = gameBoardModule.getGameBoard();
         arr.splice(cellIndex, 1, gameModule.getPlayer().mark);
         gameModule.setPlayer();
         gameModule.getDeclareWinner();
      }
   }

   function printGameOver(winner) {
      let wrapper = document.querySelector("#wrapper");
      let container = document.createElement("div");
      let h3 = document.createElement("h3");
      let span = document.createElement("span");
      let restartBtn = document.createElement("button");
      // contentContainer.classList.add("blur");
      restartBtn.textContent = "Restart game";
      restartBtn.classList.add("restart-button");
      h3.textContent = "GAME OVER";
      span.textContent = `The winner is ${winner}.`;
      container.className = "overlay";
      container.appendChild(h3);
      container.appendChild(span);
      container.appendChild(restartBtn);
      let gameWrapper = document.getElementById("gameArea");
      gameWrapper.appendChild(container);
      restartBtn.addEventListener("click", e => {
         resetCells();
         removeOverlay();
         gameModule.setGameRestart();
      });
   }

   function removeOverlay() {
      let overlay = document.querySelector(".overlay");
      overlay.remove();
   }

   function resetCells() {
      cells.forEach(cell => {
         cell.textContent = "";
      });
   }

   return {
      printGameOver,
      updateCell,
   }
})();