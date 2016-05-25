<template>
  <div class="song">
    <p>{{ song.title }}</p>
<!--     <p>{{ song.description }}</p>
    <pre>{{song | json}}</pre>
 -->  </div>
</template>

<script>
export default {
  props: ['song']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song > *{
	cursor: pointer;
}
/*#song {
  border: 1px solid black;
}
*/</style>
