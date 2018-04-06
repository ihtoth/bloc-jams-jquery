{
  //I would probably add this to the update-ui section too, as these statements
  //just push the album data to the ui.
  $('#album-title').text(album.title);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
}
