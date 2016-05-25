import SongList from './components/SongList.vue'
import SongDetails from './components/SongDetails.vue'

export default {
  '/': {
    name: 'SongList',
    component: SongList
  },
  '/:songId': {
    name: 'SongDetails',
    component: SongDetails
  }
}
