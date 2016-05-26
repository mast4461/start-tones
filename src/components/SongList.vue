<template>
  <div id="song-list">
    <div id="filter-inputs">
      Filters

      <table>
        <tr>
          <td>General:</td>
          <td><input v-model="filterGeneral"></td>
        </tr>
        <tr>
          <td>Title:</td>
          <td><input v-model="filterTitle"></td>
        </tr>
        <tr>
          <td>Description:</td>
          <td><input v-model="filterDescription"></td>
        </tr>
        <tr>
          <td>Added by:</td>
          <td><input v-model="filterAddedBy"></td>
        </tr>
        <tr>
          <td>Arranged by:</td>
          <td><input v-model="filterArrangedBy"></td>
        </tr>
      </table>
    </div>

    <hr>

    <song-list-item v-for="song in songs
      | filterBy filterGeneral
      | filterBy filterTitle in 'title'
      | filterBy filterDescription in 'description'
      | filterBy filterAddedBy in 'addedBy'
      | filterBy filterArrangedBy in 'arrangedBy'"
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
    filterDescription: '',
    filterArrangedBy: '',
    filterAddedBy: ''
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
