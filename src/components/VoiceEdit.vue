<template>
  <input v-model="name">
  <select v-model="note">
    <option v-for="note in notes" :value="note">{{note}}</option>
  </select>
</template>

<script>
import { updateVoiceName, updateVoiceNote } from '../vuex/actions'
import noteFrequencies from '../assets/NoteFrequencies.json'

export default {
  props: ['voice'],

  computed: {
    notes () {
      return Object.keys(noteFrequencies)
    },
    name: {
      set (newName) {
        this.updateVoiceName(this.voice, newName)
      },
      get () {
        return this.voice.name
      }
    },
    note: {
      set (newNote) {
        this.updateVoiceNote(this.voice, newNote)
      },
      get () {
        return this.voice.note
      }
    }
  },

  vuex: {
    actions: {
      updateVoiceName,
      updateVoiceNote
    }
  }
}
</script>