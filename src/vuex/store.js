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
    }
  }
})
