<template>
  <div class="song">
    <b>{{ song.title }}</b>
    <pre>{{ song | json }}</pre>
  </div>
</template>

<script>
export default {
  props: ['song']
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
