<template>
  <button @mousedown="soundStart" @mouseup="soundStop" @mouseleave="soundStop">
    <slot></slot>
  </button>
</template>

<script>
import _ from 'lodash'
import webaudio from 'webaudio'
import toneMap from '../assets/tone-map.json'
const tau = 2 * Math.PI

export default {
  props: ['notes'],
  computed: {
    frequencies () {
      return this.notes.map(note => toneMap[note])
    }
  },
  methods: {
    soundStart () {
      this.soundStop()
      this.channel = webaudio((t, i) => {
        const tTau = t * tau
        return _.meanBy(this.frequencies, frequency => Math.sin(tTau * frequency))
      })
      this.channel.play()
    },
    soundStop () {
      if (this.channel) {
        this.channel.stop()
        this.channel = false
      }
    }
  }
}
</script>