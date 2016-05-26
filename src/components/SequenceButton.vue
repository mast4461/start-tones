<template>
  <div>
    <button @click="soundStart">
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { createChannel } from '../sound'
const noteDuration = 800

export default {
  props: ['voices'],
  computed: {
    notes () {
      return this.voices.map(voice => voice.note)
    }
  },
  methods: {
    soundStart () {
      this.notes.forEach((note, i) => {
        const channel = createChannel(note)
        setTimeout(() => channel.play(), i * noteDuration)
        setTimeout(() => channel.stop(), (i + 1) * noteDuration)
      })
    }
  }
}
</script>