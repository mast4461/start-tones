<template>
  <div id="song-list">
    <div id="filter-inputs">
      Filters
      <div>General:<input v-model="filterGeneral"></div>
      <div>Title:<input v-model="filterTitle"></div>
      <div>Description:<input v-model="filterDescription"></div>
    </div>

    <hr>

    <song-list-item v-for="song in songs
      | filterBy filterGeneral
      | filterBy filterTitle in 'title'
      | filterBy filterDescription in 'description'"
      :song="song" v-link="song.id"></song-list-item>
  </div>
</template>

<script>
import SongListItem from './SongListItem.vue'

export default {
  components: {
    SongListItem
  },
  data: () => ({
    filterGeneral: '',
    filterTitle: '',
    filterDescription: ''
  }),
  vuex: {
    getters: {
      songs: state => state.songs
    }
  }
}
</script>

<style>

</style>
