// import { playerModule } from "./player.js";

function gameModule() {

   // playerModule();

   function addMarkerToCell(e, marker, board) {
      let target = e.target;
      target.textContent = marker;
      // console.log(target.id);
      board.forEach((element, obj, index) => {
         let tarId = Number(target.id);
         if (element.id === tarId) {
            element.content = marker;
         }
      });
   }

   return {
      addMarkerToCell,
      // determineWinner,
   }
}

export { gameModule };