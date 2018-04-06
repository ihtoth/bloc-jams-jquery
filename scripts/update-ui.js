{
  function uiSongDuration(duration){
    $('#time-control .total-time').text(player.prettyTime(duration));
  }

  function uiTimeElapsed(time, duration){
    const percent = (time/duration)*100;

    $('#time-control .current-time').text(player.prettyTime(time));
    $('#time-control input').val(percent);
  }

  function uiSongList(song,index){
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class = "song-number">${index+1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${player.prettyTime(song.duration)}</td>
      </tr>
      `);

    $('#song-list').append(song.element);
  }
}
