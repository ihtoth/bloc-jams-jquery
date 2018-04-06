{
  album.songs.forEach( (song,index) => {
    //add each song to the list visually.
    uiSongList(song,index);

    //add event listener to each song.
    song.element.on('click', event => {
      player.playPause(song);
      $('button#play-pause').attr('playState',player.playState); //update html attribute playState.
      uiSongDuration(player.currentlyPlaying.duration);          //update length of song at tail end of song slider.
    });

  });
}
