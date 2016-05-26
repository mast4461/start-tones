<template>
  <button @mousedown="soundStart" @mouseup="soundStop" @mouseleave="soundStop">
    <slot></slot>
  </button>
</template>

<script>
import { createChannel } from '../sound'

export default {
  props: ['notes'],
  data: () => ({
    channels: ''
  }),
  methods: {
    soundStart () {
      this.soundStop()
      this.channels = this.notes.map(createChannel)
      this.channels.forEach(channel => channel.play())
    },
    soundStop () {
      if (this.channels) {
        this.channels.forEach(channel => channel.stop())
        this.channels = false
      }
    }
  }
}
</script>