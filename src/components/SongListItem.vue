<template>
  <div class="song" v-link="link">
    <b>{{ song.title }}</b>
    <pre>{{ quickInfo | json }}</pre>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['song'],
  computed: {
    quickInfo () {
      return _.pick(this.song, ['arrangedBy', 'description', 'addedBy'])
    },
    link () {
      return _.has(this.song, '.key') ? `song/${this.song['.key']}` : '/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song, .song > *{
  cursor: pointer;
}
.song {
  border-bottom: 1px solid gray;
  background-color: rgba(255,255,240,1);
  padding-top: 10px;
}

.song pre {
  height: 50px;
  overflow: hidden;
  font-size: 8pt;
}
</style>
