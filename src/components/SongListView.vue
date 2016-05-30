<template>
  <div id="song-list-view">
    <div id="filter-inputs">
      Filters

      <table>
        <tr v-for="filter in filters">
          <td>{{filter.label}}:</td>
          <td><input v-model="filter.value"></td>
        </tr>
      </table>
    </div>

    <p>{{filteredSongs.length}} matches of {{songs.length}} songs</p>

    <button @click="addNewSong">Add new song</button>

    <hr>
    <song-list :songs="filteredSongs"></song-list>
  </div>
</template>

<script>
import SongList from './SongList.vue'
import _ from 'lodash'
import Vue from 'vue'
import theFirebase from '../theFirebase'
import songTemplate from '../assets/SongTemplate.json'

export default {
  components: {
    SongList
  },
  data: () => ({
    filters: [
      { label: 'General', value: '' },
      { label: 'Description', field: 'description', value: '' },
      { label: 'Title', field: 'title', value: '' },
      { label: 'Added by', field: 'addedBy', value: '' },
      { label: 'Arranged by', field: 'arrangedBy', value: '' }
    ]
  }),
  computed: {
    filteredSongs () {
      let songs = this.songs.slice()
      let filter = Vue.filter('filterBy')
      songs = filter(songs, this.filters[0].value)
      return filter(songs, this.customFilter)
    }
  },
  firebase: {
    songs: theFirebase.songsRef
  },
  methods: {
    customFilter (song, index) {
      return _.every(this.filters, filter => {
        if (filter.value === '' || !filter.field) {
          return true
        }
        let text = JSON.stringify(song[filter.field])
        return new RegExp(filter.value.toLowerCase()).test(text.toLowerCase())
      })
    },
    addNewSong () {
      let key = theFirebase.createSong(songTemplate)
      this.$router.go(key)
    }
    // addSongsToFireBase () {
    //   this.songs.forEach(song => itemsRef.push(song))
    // }
  }
}
</script>

<style>

</style>
