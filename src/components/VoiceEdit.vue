<template>
  <input v-model="voice.name">
  <select v-model="voice.note">
    <option v-for="note in notes" :value="note">{{note}}</option>
  </select>
</template>

<script>
import noteFrequencies from '../assets/NoteFrequencies.json'

export default {
  props: ['voice'],

  computed: {
    notes () {
      return Object.keys(noteFrequencies)
    }
  }
}
</script>