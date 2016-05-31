<template>

  <h1>{{songCopy.title}}</h1>

  <div v-for="voice in voices">
    <sound-button :notes="[voice.note]">Play</sound-button>
    <voice-edit :voice="voice"></voice-edit>
    <button @click="deleteVoice($index)">Delete</button>
    <notation :note="voice.note"></notation>
  </div>

  <sound-button :notes="notes">Play chord</sound-button>
  <sequence-button :notes="notes">Play sequence</sequence-button>

  <br>
  <button @click="addVoice">Add voice</button>
  <br>

  <hr>
    <table>
      <tr v-for="field in ['title', 'arrangedBy', 'description']">
        <td>{{field}}</td>
        <td><textarea v-model="songCopy[field]"></textarea></td>
      </tr>
    </table>
  <hr>

  <button @click="updateSongLocal" :disabled="!dirty">Save changes</button>
  <button @click="createSongLocal" :disabled="!dirty">Save as new song</button>
  <button @click="reloadSong" :disabled="!dirty">Reload</button>
  <button @click="deleteSongLocal">Delete song</button>
</template>

<script>
import SoundButton from './SoundButton.vue'
import VoiceEdit from './VoiceEdit.vue'
import SequenceButton from './SequenceButton.vue'
import Notation from './Notation.vue'

import _ from 'lodash'
import traverse from 'traverse'
import theFirebase from '../theFirebase'

export default {
  components: {
    SoundButton,
    VoiceEdit,
    SequenceButton,
    Notation
  },
  data: () => ({
    songCopy: '',
    song: {}
  }),
  computed: {
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
    let ref = theFirebase.songsRef.child(this.$route.params.songKey)
    this.$bindAsObject('song', ref)
    ref.on('value', this.reloadSong)
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
      if (!_.has(this.songCopy, 'voices')) {
        this.$set(this.songCopy, 'voices', [])
      }
      this.songCopy.voices.push({name: '', note: 'G5'})
    },
    deleteVoice (index) {
      this.songCopy.voices.splice(index, 1)
    },
    reloadSong () {
      this.songCopy = traverse(this.song).map(_.identity)
    },
    updateSongCopy () {
      console.log('updating song copy')
      _.assign(this.songCopy, traverse(this.song).map(_.identity))
    }
  }
}
</script>
