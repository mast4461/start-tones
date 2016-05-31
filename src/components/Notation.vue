<template>
<div id="light-notation">
  <div id="grid" :style="gridStyle">
    <div class="dashed-line" v-for="i in 4"></div>

    <div class="solid-line" v-for="i in 2"></div>
    <div class="solid-line">
      <div class="treble-clef">&#119070;</div>
    </div>
    <div class="solid-line" v-for="i in 2"></div>

    <div class="dashed-line"></div>

    <div class="solid-line" v-for="i in 2"></div>
    <div class="solid-line">
      <div class="bass-clef">&#x1d122;</div>
    </div>
    <div class="solid-line" v-for="i in 2"></div>

    <div class="dashed-line" v-for="i in 4"></div>
  </div>
  <div id="mark">
    <div id="modifier">{{{modifier}}}</div>
  </div>
</div>
</template>

<script>
import noteFrequencies from '../assets/NoteFrequencies.json'

export default {
  props: ['note'],
  computed: {
    modifier () {
      if (/#/.test(this.note)) {
        return '#'
      } else if (/b/.test(this.note)) {
        return 'b'
      } else {
        return ''
      }
    },
    naturalNote () {
      return this.note.replace(/#|b/, '')
    },
    naturalNotes () {
      return Object.keys(noteFrequencies).filter(note => !/#|b/.test(note))
    },
    noteIndexOffset () {
      return this.naturalNotes.indexOf(this.naturalNote) - this.baseNoteIndex
    },
    baseNoteIndex () {
      return this.naturalNotes.indexOf('C4')
    },
    gridStyle () {
      return {
        transform: `translateY(-50%) translateY(${this.noteIndexOffset * 3}px)`
      }
    }
  }
}
</script>

<style scoped>
#light-notation {
  position: relative;
  height: 50px;
  overflow: hidden;
  margin: 10px 0;
}

#grid {
  position: absolute;
  width: 100%;
  top: 50%;
}

#mark {
  position: absolute;
  transform: translateY(-50%);
  width: 6px;
  height: 4px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 4px solid black;
  border-right: 4px solid black;
  border-radius: 50%;
  margin-left: 40px;
  top: 50%;
}

#modifier {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 200%;
}

.dashed-line, .solid-line {
  margin: 5px 0;
  height: 1px;
}

.dashed-line {
  background-color: #ccc;
}

.solid-line {
  background-color: black;
}

.clef-container {
  position: relative;
}

.treble-clef, .bass-clef {
  margin-left: 5px;
  position: absolute;
  transform: translateY(-50%);
}

.treble-clef {
  font-size: 50px;
}
.bass-clef {
  font-size: 30px;
}

</style>