<template>
  <div>
    <sound-button :notes="notes">Chord</sound-button>
  </div>
</template>

<script>
import SoundButton from './SoundButton.vue'
export default {
  components: {
    SoundButton
  },
  props: ['voices'],
  computed: {
    notes () {
      return this.voices.map(voice => voice.note)
    }
  }
}
</script>