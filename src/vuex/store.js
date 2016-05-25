import Vuex from 'vuex'
import Vue from 'vue'
// import _ from 'lodash'

import MockContent from '../assets/MockContent.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: MockContent.songs
  },
  mutations: {
    UPDATE_VOICE_NAME (state, voice, newName) {
      voice.name = newName
    },
    UPDATE_VOICE_NOTE (state, voice, newNote) {
      voice.note = newNote
    }
  }
})
