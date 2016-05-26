import songTemplate from '../assets/SongTemplate.json'
import _ from 'lodash'

export const createSong = ({dispatch}, newSongCandidate = {}) => {
  let newSong = _.assignIn({}, songTemplate, newSongCandidate)
  newSong.id = ('' + Math.random() + Date.now()).substr(2)
  dispatch('CREATE_SONG', newSong)
  return newSong
}

export const updateSong = ({dispatch}, updatedSong) => dispatch('UPDATE_SONG', updatedSong)

export const deleteSong = ({dispatch}, songToDelete) => dispatch('DELETE_SONG', songToDelete)
