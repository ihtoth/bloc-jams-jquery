{

  $('button#play-pause').on('click',function(){
    player.playPause();
    $(this).attr('playState',player.playState);
    uiSongDuration(player.currentlyPlaying.duration);
  });

  $('button#next').on('click',function(){
    changeSongs('next');
  });

  $('button#previous').on('click', function(){
    changeSongs('previous');
  });
  //why do some handler functions get handed 'event' and some don't?
  $('#time-control input').on('input', function(event){
      player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function(event){
      player.setVolume(event.target.value);
  })

  setInterval( () => {
    if (player.playState != 'playing'){ return; }
    uiTimeElapsed(player.getTime(), player.getDuration()); //update time elapsed in song on ui every second.
  }, 1000);

  function changeSongs(direction){
    if(player.playState != 'playing'){return;}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

    if (direction == 'next' && currentSongIndex+1 < album.songs.length){
      player.playPause(album.songs[currentSongIndex+1]);
    }
    if (direction == 'previous' && currentSongIndex-1 >= 0){
      player.playPause(album.songs[currentSongIndex-1]);
    }
    //update total time of song
    uiSongDuration(player.currentlyPlaying.duration);
  }

}
