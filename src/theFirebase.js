import Firebase from 'firebase'
import _ from 'lodash'
import traverse from 'traverse'

const songsRef = new Firebase('https://start-tones.firebaseio.com/songs/')
exports.songsRef = songsRef

exports.createSong = function (newSong) {
  removeKey(newSong)
  return songsRef.push(newSong).key()
}

exports.readSong = function (key) {
  return songsRef.child(key)
}

exports.updateSong = function (songToUpdate) {
  const copy = traverse(songToUpdate).map(_.identity)
  const key = getKey(copy)
  removeKey(copy)
  return songsRef.child(key).set(copy)
}

exports.deleteSong = function (songToDelete) {
  return songsRef.child(getKey(songToDelete)).remove()
}

function getKey (song) {
  return song['.key']
}

function removeKey (song) {
  delete song['.key']
}
