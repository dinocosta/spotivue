webpackJsonp([0],[,,function(t,e,n){"use strict";var r=n(1),a=n(16),s=n(12),i=n.n(s),o=n(11),u=n.n(o);r.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"AlbumList",component:u.a},{path:"/album/:id",name:"SongList",component:i.a}]})},function(t,e,n){n(10);var r=n(0)(n(7),n(14),null,null);t.exports=r.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(4),s=n(5),i=n.n(s),o=n(3),u=n.n(o),l=n(2);r.a.config.productionTip=!1,r.a.use(a.a),r.a.use(i.a),new r.a({el:"#app",router:l.a,template:"<App/>",components:{App:u.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{artistID:null}},watch:{artistID:function(){"/"!==this.$route.path&&this.$router.push("/")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"album-list",props:["artistID"],data:function(){return{albums:null}},watch:{artistID:function(){var t=this;this.$http.get("http://api.spotify.com/v1/artists/"+this.artistID+"/albums").then(function(e){t.albums=e.body.items},function(){t.albums=null})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"song-list",props:["albumID"],data:function(){return{tracks:null}},watch:{$route:function(){console.log(this.$route.params.id)}}}},function(t,e){},function(t,e,n){var r=n(0)(n(8),n(13),null,null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(9),n(15),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.albums?n("v-row",[n("v-col",{attrs:{xs12:""}},[t._l(t.albums,function(e){return["single"!=e.album_type?n("v-card",{attrs:{horizontal:""},nativeOn:{click:function(e){t.alertUser(e)}}},[n("v-card-row",{attrs:{img:e.images[0].url,height:"120px"}}),t._v(" "),n("v-card-text",[t._v("\n          "+t._s(e.artists[0].name)+"\n          "),n("br"),t._v("\n          "+t._s(e.name)+"\n          "),n("br"),t._v(" "),n("a",{attrs:{href:e.uri}},[t._v("Listen on Spotify")]),t._v(" "),n("br"),t._v(" "),n("router-link",{attrs:{to:{path:"album/"+e.id}}},[t._v("Song List")])],1)],1):t._e(),t._v(" "),n("br")]})],2)],1):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-container",{staticClass:"container"},[n("v-row",[n("h2",[t._v("Spotivue")])]),t._v(" "),n("v-row",[n("v-col",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Spotify Artist ID"},model:{value:t.artistID,callback:function(e){t.artistID=e},expression:"artistID"}})],1)],1),t._v(" "),n("router-view",{attrs:{artistID:t.artistID}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v(t._s(this.$route.params.id))])},staticRenderFns:[]}},,,,function(t,e){}],[6]);
//# sourceMappingURL=app.cf6d32a86db4262570f0.js.map