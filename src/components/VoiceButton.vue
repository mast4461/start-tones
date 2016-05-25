<template>
	<sound-button :notes="[voice.note]">{{voice.name}}, {{voice.note}}</sound-button>
</template>

<script>
import SoundButton from './SoundButton.vue'
export default {
  components: {
    SoundButton
  },
  props: ['voice']
}
</script>