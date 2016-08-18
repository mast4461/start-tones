<template>
  <button
  @mousedown="soundStart"
  @touchstart="soundStart"
  @mouseup="soundStop"
  @mouseleave="soundStop"
  @touchend="soundStop">
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
  },
  // TODO is the following method name correct?
  beforeDestroy () {
    this.soundStop()
  }
}
</script>