function gameBoardModule() {
   const gameBoardArr = [];
   function createGameBoard(id) {
      let counter = 0;
      let objElem = new Object;
      let gameArea = document.getElementById("gameArea");
      for (let i = 0; i < id; i++) {
         let cell = document.createElement("div");
         cell.className = "cell";
         cell.id = counter;
         objElem.id = counter++;
         objElem.content = "";
         gameArea.appendChild(cell);
         gameBoardArr.push(objElem);
         objElem = {};
      }
   }


   return {
      createGameBoard,
      gameBoardArr,
   }
};



export { gameBoardModule };