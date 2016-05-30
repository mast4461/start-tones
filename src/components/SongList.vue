<template>
  <div id="song-list">
    <div>
      <label for="sortField">Order by</label>
      <select name="sortField" id="sort-field-selector" v-model="sortField">
        <option v-for="field in sortFields" :value="field">{{field}}</option>
      </select>
    </div>
    <song-list-item v-for="song in songs | orderBy sortField" :song="song"></song-list-item>
  </div>
</template>

<script>
import SongListItem from './SongListItem.vue'
import songTemplate from '../assets/SongTemplate.json'
import _ from 'lodash'

export default {
  components: {
    SongListItem
  },
  props: ['songs'],
  data: () => ({
    sortField: 'title'
  }),
  computed: {
    sortFields () {
      return _.keys(songTemplate)
    }
  }
}
</script>

<style>

</style>
