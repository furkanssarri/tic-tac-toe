
// import { gameModule } from "./game.js";

let playerModule = function () {

   // gameModule();

   function createUser(name, marker) {
      name = name;
      marker = marker;
      // function determineWinner(marker) {
      //    console.log(this.marker);
      // }
   
      return {
         name,
         marker,
         determineWinner,
      }
   
   }

   return {
      createUser,
   }
}

export { playerModule };