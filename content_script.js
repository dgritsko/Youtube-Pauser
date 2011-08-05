var pause = function(players) {
   for (var i = 0; i < players.length; i++) {
      if (players[i].hasOwnProperty('pauseVideo')) {
         players[i].pauseVideo();
      }
   }
}

pause(jQuery('object'));
pause(jQuery('#movie_player'));
