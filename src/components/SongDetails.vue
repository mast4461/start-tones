<template>
  <button @click="addVoice">Add voice</button>
  <div v-for="voice in songCopy.voices">
    <sound-button :notes="[voice.note]">Play</sound-button>
    <voice-edit :voice="voice"></voice-edit>
    <button @click="deleteVoice($index)">Delete</button>
  </div>
  <chord-button :voices="songCopy.voices">Play chord</chord-button>
  <sequence-button :voices="songCopy.voices">Play sequence</sequence-button>

  <hr>
    <table>
      <tr v-for="field in ['title', 'arrangedBy', 'description']">
        <td>{{field}}</td>
        <td><input v-model="songCopy[field]"></td>
      </tr>
    </table>
  <hr>

  <button @click="updateSongLocal" :disabled="!dirty">Save changes</button>
  <button @click="createSongLocal" :disabled="!dirty">Save as new song</button>
  <button @click="reloadSong" :disabled="!dirty">Reload</button>
  <button @click="deleteSongLocal">Delete song</button>

  <hr>

  <pre>{{songCopy | json}}</pre>
</template>

<script>
import _ from 'lodash'
import traverse from 'traverse'
import SoundButton from './SoundButton.vue'
import VoiceEdit from './VoiceEdit.vue'
import ChordButton from './ChordButton.vue'
import SequenceButton from './SequenceButton.vue'
import { updateSong, createSong, deleteSong } from '../vuex/actions'

export default {
  components: {
    SoundButton,
    ChordButton,
    VoiceEdit,
    SequenceButton
  },
  data: () => ({
    songCopy: {}
  }),
  vuex: {
    getters: {
      songs: state => state.songs
    },
    actions: {
      updateSong,
      createSong,
      deleteSong
    }
  },
  computed: {
    song () {
      return _.find(this.songs, song => song.id === this.$route.params.songId)
    },
    dirty () {
      return !_.isEqual(this.song, this.songCopy)
    }
  },
  created () {
    this.reloadSong()
  },
  methods: {
    createSongLocal () {
      const newSong = this.createSong(this.songCopy)
      this.$router.go(newSong.id)
    },
    updateSongLocal () {
      this.updateSong(this.songCopy)
    },
    deleteSongLocal () {
      this.$router.go('/')
      this.deleteSong(this.songCopy)
    },
    addVoice () {
      this.songCopy.voices.push({name: '', note: 'G5'})
    },
    deleteVoice (index) {
      this.songCopy.voices.splice(index, 1)
    },
    reloadSong () {
      this.songCopy = traverse(this.song).map(_.identity)
    }
  }
}
</script>