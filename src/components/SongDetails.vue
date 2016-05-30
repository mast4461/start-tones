<template>
  <button @click="addVoice">Add voice</button>
  <div v-for="voice in voices">
    <sound-button :notes="[voice.note]">Play</sound-button>
    <voice-edit :voice="voice"></voice-edit>
    <button @click="deleteVoice($index)">Delete</button>
  </div>

  <sound-button :notes="notes">Play chord</sound-button>
  <sequence-button :notes="notes">Play sequence</sequence-button>

  <notation :notes="notes" :labels="names" clef="treble"></notation>
  <notation :notes="notes" :labels="names" clef="bass" ></notation>

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
import SequenceButton from './SequenceButton.vue'
import Notation from './Notation.vue'
import theFirebase from '../theFirebase'

export default {
  components: {
    SoundButton,
    VoiceEdit,
    SequenceButton,
    Notation
  },
  data: () => ({
    songCopy: {},
    song: {}
  }),
  firebase: {
    songs: theFirebase.songsRef
  },
  computed: {
    song () {
      return _.find(this.songs, song => song['.key'] === this.$route.params.songKey)
    },
    dirty () {
      return !_.isEqual(this.song, this.songCopy)
    },
    voices () {
      return this.songCopy.voices || []
    },
    notes () {
      return this.voices.map(voice => voice.note)
    },
    names () {
      return this.voices.map(voice => voice.name)
    }
  },
  created () {
    this.reloadSong()
  },
  methods: {
    createSongLocal () {
      let key = theFirebase.createSong(this.songCopy)
      this.$router.go(key)
    },
    updateSongLocal () {
      theFirebase.updateSong(this.songCopy)
    },
    deleteSongLocal () {
      this.$router.go('/')
      theFirebase.deleteSong(this.songCopy)
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
