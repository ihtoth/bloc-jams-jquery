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
