export const playerModule = (function () {
   function _player(name, mark) {
      return { name, mark };
   }

   const setPlayers = function (name,marker) {
      let newPlayer = _player(name,marker);
      return newPlayer;
   }
   
   return {
      setPlayers,
   }
})();