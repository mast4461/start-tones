<template>
  <div v-for="voice in songCopy.voices">
    <sound-button :notes="[voice.note]">Play</sound-button>
    <voice-edit :voice="voice"></voice-edit>
    <button @click="deleteVoice($index)">Delete</button>
  </div>
  <chord-button :voices="songCopy.voices"></chord-button>
  <sequence-button :voices="songCopy.voices"></sequence-button>
  <pre>{{songCopy | json}}</pre>

  <button @click="saveChanges" :disabled="!dirty">Save changes</button>
  <button @click="reloadSong" :disabled="!dirty">Reload</button>
</template>

<script>
import _ from 'lodash'
import traverse from 'traverse'
import SoundButton from './SoundButton.vue'
import VoiceEdit from './VoiceEdit.vue'
import ChordButton from './ChordButton.vue'
import SequenceButton from './SequenceButton.vue'
import { updateSong } from '../vuex/actions'

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
      updateSong
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
    saveChanges () {
      this.updateSong(this.songCopy)
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