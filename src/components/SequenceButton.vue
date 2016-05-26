<template>
  <div>
    <button @click="soundStart">Sequence</button>
  </div>
</template>

<script>
import webaudio from 'webaudio'
import noteFrequencies from '../assets/NoteFrequencies.json'

const Tau = 2 * Math.PI
const noteDuration = 700
export default {
  props: ['voices'],
  computed: {
    notes () {
      return this.voices.map(voice => voice.note)
    },
    frequencies () {
      return this.notes.map(note => noteFrequencies[note])
    },
    channels () {
      return this.frequencies.map(frequency => {
        return webaudio((t, i) => Math.sin(t * Tau * frequency))
      })
    }
  },
  methods: {
    soundStart () {
      this.channels.forEach((channel, i) => {
        setTimeout(() => channel.play(), i * noteDuration)
        setTimeout(() => channel.stop(), (1 + i) * noteDuration)
      })
    }
  }
}
</script>