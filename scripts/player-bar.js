{

  $('button#play-pause').on('click',function(){
    player.playPause();
    $(this).attr('playState',player.playState);
  });

  $('button#next').on('click',function(){
    changeSongs('next');
  });

  $('button#previous').on('click', function(){
    changeSongs('previous');
  });

  $('#time-control input').on('input', function(event){
      player.skipTo(event.target.value);
  });

  setInterval( () => {
    if (player.playState != 'playing'){ return; }

    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime/duration)*100;
    $('#time-control .current-time').text(currentTime);
    $('#time-control input').val(percent);

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
  }

}
