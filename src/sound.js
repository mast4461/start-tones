import webaudio from 'webaudio'
import _ from 'lodash'
import NoteFrequencies from './assets/NoteFrequencies.json'

const Tau = 2 * Math.PI
const context = (() => webaudio(t => waveform(t, 1)).context)()

exports.createChannel = function (frequencyOrNote) {
  const frequency = getFrequency(frequencyOrNote)
  const channel = webaudio(context, t => waveform(t, frequency))

  return {
    play () {
      channel.play()
    },
    stop () {
      channel.stop()
    }
  }
}

function getFrequency (frequencyOrNote) {
  if (_.isString(frequencyOrNote)) {
    return NoteFrequencies[frequencyOrNote]
  } else {
    return frequencyOrNote
  }
}

function waveform (t, frequency) {
  return Math.sin(t * Tau * frequency)
}
