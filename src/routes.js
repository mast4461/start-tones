import SongListView from './components/SongListView.vue'
import SongDetails from './components/SongDetails.vue'

export default {
  '/': {
    name: 'SongListView',
    component: SongListView
  },
  '/song/:songKey': {
    name: 'SongDetails',
    component: SongDetails
  }
}
