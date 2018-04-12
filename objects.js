var playlist = {
  'Mozart':'Requiem',
  'Albanini':'Adagio'
}
function updatePlaylist(playlist, artistName, title){
  playlist[artistName] = title
  return playlist
}
function removeFromPlaylist