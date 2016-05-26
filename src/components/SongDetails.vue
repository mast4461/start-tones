<template>
  <div v-for="voice in song.voices">
    <voice-button :voice="voice"></voice-button>
    <voice-edit :voice="voice"></voice-edit>
  </div>
  <chord-button :voices="song.voices"></chord-button>
  <sequence-button :voices="song.voices"></sequence-button>
  <pre>{{song | json}}</pre>
</template>

<script>
import _ from 'lodash'
import VoiceButton from './VoiceButton.vue'
import VoiceEdit from './VoiceEdit.vue'
import ChordButton from './ChordButton.vue'
import SequenceButton from './SequenceButton.vue'

export default {
  components: {
    VoiceButton,
    ChordButton,
    VoiceEdit,
    SequenceButton
  },
  vuex: {
    getters: {
      songs: state => state.songs
    }
  },
  computed: {
    song () {
      return _.find(this.songs, song => song.id === this.$route.params.songId)
    }
  }
}
</script>