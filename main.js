import { playerModule } from "./js/player.js";
import { gameBoardModule } from "./js/gameBoard.js";
import { gameModule } from "./js/game.js";

(function () {
   playerModule();
   const players = [];
   let playerFactory = playerModule();

   gameBoardModule();
   const gameBoardInstance = gameBoardModule();
   // console.log(gameBoardModule()); 
   gameBoardInstance.createGameBoard(9)

   let boardOfGame = gameBoardInstance.gameBoardArr;


   gameModule();
   const gameInstance = gameModule();

   const cells = document.querySelectorAll(".cell");
   cells.forEach(cell => {
      cell.addEventListener("click", (e) => {
         gameInstance.addMarkerToCell(e, "X", boardOfGame);
         // gameInstance.determineWinner(e, "X");
         // checkWinStatus(e, gameBoardInstance.gameBoardArr);
      });
   });

   let clickedButtonConent;
   let name;

   function processValues(name, marker) {
      const player = playerFactory.createUser(name, marker);
      // player.determineWinner();
      players.push(player);

   }

   let markerButtons = document.querySelectorAll(".markerButton");

   markerButtons.forEach(button => {
      button.addEventListener("click", () => {
         clickedButtonConent = button.textContent;
      })
   });


   let form = document.getElementById("myForm");
   form.addEventListener("submit", e => {
      e.preventDefault();
      name = form.firstElementChild.value.trim();
      processValues(name, clickedButtonConent);
   });

   // let module = playerModule;

   let logBtn = document.getElementById("logObj");

   logBtn.addEventListener("click", () => {
      console.log(players);
      // players[0].determineWinner();
   });

   const gameArea = document.getElementById("gameArea");


   // function checkWinStatus(e, gameBoard) {
   //    let eventIndex = e.target.id;

   //    for (let i = 0; i < gameBoard.length; i++) {
   //       const element = gameBoard[i];
   //       let cellToOneRight = element + 1;
   //       console.log(eventIndex, cellToOneRight.id);
   //    }
   // }

   

   cells.forEach((cell, index, obj) => {
      
      cell.addEventListener('click', () => {

         // To Right by 1
         let oneRight = calculate(index, "add", 1);
         let oneLeft = calculate(index, "subtract", 1);

         // Columns

         let threeDown = calculate(index, "add", 3);
         let threeup = calculate(index, "subtract", 3);

         // Access the element
         // let neighboringElement = boardOfGame[neighborIndex];
         let elementOneRight = boardOfGame[oneRight];
         let elementOneLeft = boardOfGame[oneLeft];
         let elementThreeDown = boardOfGame[threeDown];
         let elementThreeUp = boardOfGame[threeup];

         console.log(elementOneRight);
         console.log(elementOneLeft);
         console.log(elementThreeDown);
         console.log(elementThreeUp);
         
         
      });
   });


   function calculate(currIndex, orperator, targetIndex) {
      var neighborIndex;
      switch (orperator) {
         case "add":
            neighborIndex = currIndex + targetIndex;
            // return neighborIndex;
            break;
         case "subtract":
            neighborIndex = currIndex - targetIndex;
            // return neighborIndex;
            break;
      }
      if (neighborIndex <= 0) {
         neighborIndex = currIndex;
      } else if (neighborIndex >= 8) {
         neighborIndex = currIndex;
      }
      // console.log(neighborIndex);
      return neighborIndex;
   }

   function calculateToRight(currIndex, targetIndex) {
      let neighborIndex = currIndex + targetIndex;
      if (neighborIndex >= boardOfGame.length) {
         neighborIndex = currIndex;
      }
      return neighborIndex;
   }


   //    cells.forEach((cell, index) => {
   //       cell.addEventListener("click", () => {
   //          let neighborIndex = calculateNeighborIndex(index);
   //          let neighboringElement = gameBoardInstance.gameBoardArr[neighborIndex.id];
   //          console.log(`Neighboring Element = ${neighboringElement}`);
   //       });
   //    });


   // function calculateNeighborIndex(index) {
   //    let neighborIndex = index + 1;

   //    if (neighborIndex >= gameBoardInstance.gameBoardArr) {
   //       neighborIndex = 0;
   //    }
   //    return neighborIndex;
   // }


})();




