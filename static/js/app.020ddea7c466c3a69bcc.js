webpackJsonp([2,0],[function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var s=o(17),i=n(s),r=o(106),u=n(r),a=o(97),l=n(a),d=o(18),c=n(d),f=o(74),p=n(f),v=o(107),b=n(v);i["default"].use(b["default"]),i["default"].use(u["default"]),i["default"].use(l["default"]);var h=new u["default"]({history:!0});h.map(c["default"]),h.start(p["default"],"app")},,,,,function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function s(t){return t[".key"]}function i(t){delete t[".key"]}var r=o(63),u=n(r),a=o(3),l=n(a),d=o(16),c=n(d),f=new u["default"]("https://start-tones.firebaseio.com/songs/");e.songsRef=f,e.createSong=function(t){return i(t),f.push(t).key()},e.readSong=function(t){return f.child(t)},e.updateSong=function(t){var e=(0,c["default"])(t).map(l["default"].identity),o=s(e);return i(e),f.child(o).set(e)},e.deleteSong=function(t){return f.child(s(t)).remove()}},,,,,function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function s(t){return l["default"].isString(t)?c["default"][t]:t}function i(t,e){return Math.sin(t*f*e)}var r=o(108),u=n(r),a=o(3),l=n(a),d=o(14),c=n(d),f=2*Math.PI,p=function(){return(0,u["default"])(function(t){return i(t,1)}).context}();e.createChannel=function(t){var e=s(t),o=(0,u["default"])(p,function(t){return i(t,e)});return{play:function(){o.play()},stop:function(){o.stop()}}}},,,,function(t,e){t.exports={C0:16.35,"C#0":17.32,Db0:17.32,D0:18.35,"D#0":19.45,Eb0:19.45,E0:20.6,F0:21.83,"F#0":23.12,Gb0:23.12,G0:24.5,"G#0":25.96,Ab0:25.96,A0:27.5,"A#0":29.14,Bb0:29.14,B0:30.87,C1:32.7,"C#1":34.65,Db1:34.65,D1:36.71,"D#1":38.89,Eb1:38.89,E1:41.2,F1:43.65,"F#1":46.25,Gb1:46.25,G1:49,"G#1":51.91,Ab1:51.91,A1:55,"A#1":58.27,Bb1:58.27,B1:61.74,C2:65.41,"C#2":69.3,Db2:69.3,D2:73.42,"D#2":77.78,Eb2:77.78,E2:82.41,F2:87.31,"F#2":92.5,Gb2:92.5,G2:98,"G#2":103.83,Ab2:103.83,A2:110,"A#2":116.54,Bb2:116.54,B2:123.47,C3:130.81,"C#3":138.59,Db3:138.59,D3:146.83,"D#3":155.56,Eb3:155.56,E3:164.81,F3:174.61,"F#3":185,Gb3:185,G3:196,"G#3":207.65,Ab3:207.65,A3:220,"A#3":233.08,Bb3:233.08,B3:246.94,C4:261.63,"C#4":277.18,Db4:277.18,D4:293.66,"D#4":311.13,Eb4:311.13,E4:329.63,F4:349.23,"F#4":369.99,Gb4:369.99,G4:392,"G#4":415.3,Ab4:415.3,A4:440,"A#4":466.16,Bb4:466.16,B4:493.88,C5:523.25,"C#5":554.37,Db5:554.37,D5:587.33,"D#5":622.25,Eb5:622.25,E5:659.25,F5:698.46,"F#5":739.99,Gb5:739.99,G5:783.99,"G#5":830.61,Ab5:830.61,A5:880,"A#5":932.33,Bb5:932.33,B5:987.77,C6:1046.5,"C#6":1108.73,Db6:1108.73,D6:1174.66,"D#6":1244.51,Eb6:1244.51,E6:1318.51,F6:1396.91,"F#6":1479.98,Gb6:1479.98,G6:1567.98,"G#6":1661.22,Ab6:1661.22,A6:1760,"A#6":1864.66,Bb6:1864.66,B6:1975.53,C7:2093,"C#7":2217.46,Db7:2217.46,D7:2349.32,"D#7":2489.02,Eb7:2489.02,E7:2637.02,F7:2793.83,"F#7":2959.96,Gb7:2959.96,G7:3135.96,"G#7":3322.44,Ab7:3322.44,A7:3520,"A#7":3729.31,Bb7:3729.31,B7:3951.07,C8:4186.01,"C#8":4434.92,Db8:4434.92,D8:4698.63,"D#8":4978.03,Eb8:4978.03,E8:5274.04,F8:5587.65,"F#8":5919.91,Gb8:5919.91,G8:6271.93,"G#8":6644.88,Ab8:6644.88,A8:7040,"A#8":7458.62,Bb8:7458.62,B8:7902.13}},function(t,e){t.exports={title:"(untitled)",arrangedBy:"",description:"",addedBy:"",voices:[{name:"Soprano",note:"C5"},{name:"Alto",note:"A4"},{name:"Tenor",note:"G3"},{name:"Bass",note:"B2"}]}},,,function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(81),i=n(s),r=o(78),u=n(r);e["default"]={"/":{name:"SongListView",component:i["default"]},"/song/:songKey":{name:"SongDetails",component:u["default"]}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(75),i=n(s),r=o(5);e["default"]={components:{Navbar:i["default"]},firebase:{songs:r.songsRef}}},function(t,e){"use strict"},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=window.VexTab,n=window.Artist,s=window.Vex.Flow.Renderer;e["default"]={props:{notes:{"default":function(){return[]}},labels:{"default":function(){return[]}},clef:{"default":"treble"}},computed:{vexNotes:function(){return this.notes.map(function(t){return t.replace(/(\d)/,"/$1").replace(/b/,"@")})},vexLabels:function(){return this.labels.map(function(t){return""===t?"?":t})}},ready:function(){this.$watch("notes",this.draw),this.$watch("labels",this.draw),this.draw()},methods:{draw:function(){if(!(this.vexNotes.length<1)){var t=new s(this.$el,s.Backends.CANVAS),e=new n(10,10,600,{scale:.8}),i=new o(e),r="tabstave\n        clef="+this.clef+"\n        notation=true\n        tablature=false\n        notes :w "+this.vexNotes.join(" ");this.vexLabels&&(r+=" $"+this.vexLabels.join(",")+"$");try{i.parse(r),e.render(t)}catch(u){console.log(u)}}}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(10),s=800;e["default"]={props:["notes"],methods:{soundStart:function(){this.notes.forEach(function(t,e){var o=(0,n.createChannel)(t);setTimeout(function(){return o.play()},e*s),setTimeout(function(){return o.stop()},(e+1)*s)})}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(3),i=n(s),r=o(16),u=n(r),a=o(82),l=n(a),d=o(83),c=n(d),f=o(77),p=n(f),v=o(76),b=n(v),h=o(5),x=n(h);e["default"]={components:{SoundButton:l["default"],VoiceEdit:c["default"],SequenceButton:p["default"],Notation:b["default"]},data:function(){return{songCopy:"",song:{}}},computed:{dirty:function(){return!i["default"].isEqual(this.song,this.songCopy)},voices:function(){return this.songCopy.voices||[]},notes:function(){return this.voices.map(function(t){return t.note})},names:function(){return this.voices.map(function(t){return t.name})}},created:function(){var t=x["default"].songsRef.child(this.$route.params.songKey);this.$bindAsObject("song",t),t.on("value",this.reloadSong)},methods:{createSongLocal:function(){var t=x["default"].createSong(this.songCopy);this.$router.go(t)},updateSongLocal:function(){x["default"].updateSong(this.songCopy)},deleteSongLocal:function(){this.$router.go("/"),x["default"].deleteSong(this.songCopy)},addVoice:function(){i["default"].has(this.songCopy,"voices")||this.$set(this.songCopy,"voices",[]),this.songCopy.voices.push({name:"",note:"G5"})},deleteVoice:function(t){this.songCopy.voices.splice(t,1)},reloadSong:function(){this.songCopy=(0,u["default"])(this.song).map(i["default"].identity)},updateSongCopy:function(){console.log("updating song copy"),i["default"].assign(this.songCopy,(0,u["default"])(this.song).map(i["default"].identity))}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(80),i=n(s),r=o(15),u=n(r),a=o(3),l=n(a);e["default"]={components:{SongListItem:i["default"]},props:["songs"],data:function(){return{sortField:"title"}},computed:{sortFields:function(){return l["default"].keys(u["default"])}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(3),i=n(s);e["default"]={props:["song"],computed:{quickInfo:function(){return i["default"].pick(this.song,["arrangedBy","description","addedBy"])},link:function(){return i["default"].has(this.song,".key")?"song/"+this.song[".key"]:"/"}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(29),i=n(s),r=o(79),u=n(r),a=o(3),l=n(a),d=o(17),c=n(d),f=o(5),p=n(f),v=o(15),b=n(v);e["default"]={components:{SongList:u["default"]},data:function(){return{filters:[{label:"General",value:""},{label:"Description",field:"description",value:""},{label:"Title",field:"title",value:""},{label:"Added by",field:"addedBy",value:""},{label:"Arranged by",field:"arrangedBy",value:""}]}},computed:{filteredSongs:function(){var t=this.songs.slice(),e=c["default"].filter("filterBy");return t=e(t,this.filters[0].value),e(t,this.customFilter)}},firebase:{songs:p["default"].songsRef},methods:{customFilter:function(t,e){return l["default"].every(this.filters,function(e){if(""===e.value||!e.field)return!0;var o=(0,i["default"])(t[e.field]);return new RegExp(e.value.toLowerCase()).test(o.toLowerCase())})},addNewSong:function(){var t=p["default"].createSong(b["default"]);this.$router.go("song/"+t)}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(10);e["default"]={props:["notes"],data:function(){return{channels:""}},methods:{soundStart:function(){this.soundStop(),this.channels=this.notes.map(n.createChannel),this.channels.forEach(function(t){return t.play()})},soundStop:function(){this.channels&&(this.channels.forEach(function(t){return t.stop()}),this.channels=!1)}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(30),i=n(s),r=o(14),u=n(r);e["default"]={props:["voice"],computed:{notes:function(){return(0,i["default"])(u["default"])}},methods:{increment:function(){var t=this.notes.indexOf(this.voice.note);this.voice.note=this.notes[t+1]},decrement:function(){var t=this.notes.indexOf(this.voice.note);this.voice.note=this.notes[t-1]}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="<div id=app> <navbar></navbar> <router-view transition-mode=out-in> </router-view> </div>"},function(t,e){t.exports="<canvas width=0 height=0></canvas>"},function(t,e){t.exports="<div> <button @mousedown=soundStart> <slot></slot> </button> </div>"},function(t,e){t.exports="<h1>{{songCopy.title}}</h1> <div v-for=\"voice in voices\"> <sound-button :notes=[voice.note]>Play</sound-button> <voice-edit :voice=voice></voice-edit> <button @click=deleteVoice($index)>Delete</button> </div> <sound-button :notes=notes>Play chord</sound-button> <sequence-button :notes=notes>Play sequence</sequence-button> <br> <button @click=addVoice>Add voice</button> <br> <notation :notes=notes :labels=names clef=treble></notation> <notation :notes=notes :labels=names clef=bass></notation> <hr> <table> <tr v-for=\"field in ['title', 'arrangedBy', 'description']\"> <td>{{field}}</td> <td><textarea v-model=songCopy[field]></textarea></td> </tr> </table> <hr> <button @click=updateSongLocal :disabled=!dirty>Save changes</button> <button @click=createSongLocal :disabled=!dirty>Save as new song</button> <button @click=reloadSong :disabled=!dirty>Reload</button> <button @click=deleteSongLocal>Delete song</button>"},function(t,e){t.exports='<div id=song-list> <div> <label for=sortField>Order by</label> <select name=sortField id=sort-field-selector v-model=sortField> <option v-for="field in sortFields" :value=field>{{field}}</option> </select> </div> <song-list-item v-for="song in songs | orderBy sortField" :song=song></song-list-item> </div>'},function(t,e){t.exports='<div id=song-list-view> <div id=filter-inputs> Filters <table> <tr v-for="filter in filters"> <td>{{filter.label}}:</td> <td><input v-model=filter.value></td> </tr> </table> </div> <p>{{filteredSongs.length}} matches of {{songs.length}} songs</p> <button @click=addNewSong>Add new song</button> <hr> <song-list :songs=filteredSongs></song-list> </div>'},function(t,e){t.exports="<button @mousedown=soundStart @mouseup=soundStop @mouseleave=soundStop> <slot></slot> </button>"},function(t,e){t.exports='<input v-model=voice.name> <select v-model=voice.note> <option v-for="note in notes" :value=note>{{note}}</option> </select> <button @click=increment>+</button> <button @click=decrement>-</button>'},function(t,e){t.exports='<div class=song v-link=link _v-1bede7a6=""> <b _v-1bede7a6="">{{ song.title }}</b> <pre _v-1bede7a6="">{{ quickInfo | json }}</pre> </div>'},function(t,e){t.exports='<div id=navbar _v-dc24d512=""> <h2 id=header v-link="\'/\'" _v-dc24d512="">Start tones</h2> </div>'},function(t,e,o){var n,s;o(58),n=o(19),s=o(64),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(62),n=o(20),s=o(73),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(21),s=o(65),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(22),s=o(66),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(23),s=o(67),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(59),n=o(24),s=o(68),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(61),n=o(25),s=o(72),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(60),n=o(26),s=o(69),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(27),s=o(70),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(28),s=o(71),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}]);
//# sourceMappingURL=app.020ddea7c466c3a69bcc.js.map