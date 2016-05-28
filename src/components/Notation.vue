<template>
  <canvas width='700' height='100'></canvas>
</template>

<script>
const VexTab = window.VexTab
const Artist = window.Artist
const Renderer = window.Vex.Flow.Renderer

export default {
  props: ['notes', 'labels', 'clef'],
  computed: {
    vexNotes () {
      return this.notes.map(note => note.replace(/(\d)/, '/$1').replace(/b/, '@'))
    },
    vexLabels () {
      return this.labels.map(label => label === '' ? '?' : label)
    }
  },
  ready () {
    this.$watch('notes', this.draw)
    this.$watch('labels', this.draw)
    this.draw()
  },
  methods: {
    draw () {
      // Create VexFlow Renderer from canvas element.
      const renderer = new Renderer(this.$el, Renderer.Backends.CANVAS)

      // Initialize VexTab artist and parser.
      const artist = new Artist(10, 10, 600, {scale: 0.8})
      const vextab = new VexTab(artist)

      try {
        const vextabNotation = `tabstave
          clef=${this.clef}
          notation=true
          tablature=false
          notes :w ${this.vexNotes.join(' ')} \$${this.vexLabels.join(',')}\$`

        console.log(vextabNotation)
        vextab.parse(vextabNotation)

        // Render notation onto canvas.
        artist.render(renderer)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

</script>