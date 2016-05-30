<template>
  <input v-model="voice.name">
  <select v-model="voice.note">
    <option v-for="note in notes" :value="note">{{note}}</option>
  </select>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
import noteFrequencies from '../assets/NoteFrequencies.json'

export default {
  props: ['voice'],

  computed: {
    notes () {
      return Object.keys(noteFrequencies)
    }
  },

  methods: {
    increment () {
      let i = this.notes.indexOf(this.voice.note)
      this.voice.note = this.notes[i + 1]
    },
    decrement () {
      let i = this.notes.indexOf(this.voice.note)
      this.voice.note = this.notes[i - 1]
    }
  }
}
</script>