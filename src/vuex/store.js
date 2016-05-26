import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'

import MockContent from '../assets/MockContent.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: MockContent.songs
  },
  mutations: {
    UPDATE_SONG (state, updatedSong) {
      let song = _.find(state.songs, song => song.id === updatedSong.id)
      _.assign(song, updatedSong)
    },
    CREATE_SONG (state, newSong) {
      state.songs.push(newSong)
    },
    DELETE_SONG (state, songToDelete) {
      const index = state.songs.indexOf(songToDelete)
      state.songs.splice(index, 1)
    }
  }
})
