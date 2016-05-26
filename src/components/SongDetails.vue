<template>
  <div v-for="voice in songCopy.voices">
    <sound-button :notes="[voice.note]">Play</sound-button>
    <voice-edit :voice="voice"></voice-edit>
    <button @click="deleteVoice($index)">Delete</button>
  </div>
  <chord-button :voices="songCopy.voices">Play chord</chord-button>
  <sequence-button :voices="songCopy.voices">Play sequence</sequence-button>
  <pre>{{songCopy | json}}</pre>

  <button @click="updateSongLocal" :disabled="!dirty">Save changes</button>
  <button @click="createSongLocal" :disabled="!dirty">Save as new song</button>
  <button @click="reloadSong" :disabled="!dirty">Reload</button>
</template>

<script>
import _ from 'lodash'
import traverse from 'traverse'
import SoundButton from './SoundButton.vue'
import VoiceEdit from './VoiceEdit.vue'
import ChordButton from './ChordButton.vue'
import SequenceButton from './SequenceButton.vue'
import { updateSong, createSong } from '../vuex/actions'

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
      createSong
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
    updateSongLocal () {
      this.updateSong(this.songCopy)
    },
    createSongLocal () {
      let id
      do {
        id = _.random(99999)
      } while (_.find(this.songs, song => song.id === id))

      this.songCopy.id = id
      this.createSong(this.songCopy)
      this.$router.go(id)
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