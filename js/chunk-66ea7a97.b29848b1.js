(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66ea7a97"],{"110c":function(t,a,n){"use strict";var r=n("c195"),e=n.n(r);e.a},"5ca6":function(t,a,n){"use strict";n.r(a);var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("blur",{attrs:{blurSrc:t.blurSrc,blurValue:30}},[n("div",{staticClass:"rank"},[n("h2",[t._v("排行榜")]),n("table",{staticClass:"rank-container"},[n("thead",[n("tr",[n("th",{attrs:{width:"16%"}},[t._v("名次")]),n("th",[t._v("昵称")]),n("th",[t._v("分数")]),n("th",[t._v("时间")])])]),n("tbody",[t._l(t.ranks,function(a){return n("tr",{key:a.index,class:{active:a.id===t.player.id}},[n("td",[n("span",[t._v(t._s(t.put0(a.place)))])]),n("td",[n("span",[t._v(t._s(a.name))])]),n("td",[n("span",[t._v(t._s(a.score))])]),n("td",[n("span",[t._v(t._s(a.time))])])])}),t.rank.length?n("tr",{staticClass:"active"},[n("td",{attrs:{width:"16%"}},[n("span",[t._v(t._s(t.put0(t.rank[0].place)))])]),n("td",[n("span",[t._v(t._s(t.rank[0].name))])]),n("td",[n("span",[t._v(t._s(t.rank[0].score))])]),n("td",[n("span",[t._v(t._s(t.rank[0].time))])])]):t._e()],2)])])])},e=[],s=(n("cadf"),n("551c"),n("097d"),n("b0e0")),i=n("c24f"),u={name:"rank",props:{blurSrc:{type:String},score:0,time:0},data:function(){return{ranks:[],rank:[],player:null}},components:{Blur:s["a"]},mounted:function(){var t=this,a=JSON.parse(localStorage.getItem("nihongo"));Object(i["a"])(a.id,this.score,this.time).then(function(a){t.ranks=a.data.data,a.data.mate.player.flag||(t.rank=a.data.mate.player.rank),t.player=a.data.mate.player.rank[0],console.log(t.ranks,t.player)}),this.$emit("gameInit")},computed:{put0:function(){return function(t){return t<10?"0"+t:t}}}},c=u,l=(n("d9dd"),n("2877")),o=Object(l["a"])(c,r,e,!1,null,"d1ebf3f2",null);a["default"]=o.exports},b0e0:function(t,a,n){"use strict";var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"blur",attrs:{id:"blur"}},[n("div",{staticClass:"blur-bg",style:{backgroundImage:"url("+t.blurImg+")",borderRadius:t.bR,boxShadow:t.bS}},[n("canvas",{ref:"blurCanvas",staticClass:"res"})]),n("div",{staticClass:"blur-content"},[t._t("default")],2)])},e=[],s=(n("c5f6"),n("5e9e")),i={name:"blur",props:{blurSrc:{type:String},bR:{type:String,default:"10px"},bS:{type:String,default:"0 10px 20px rgba(0, 0, 0, 0.3)"},blurValue:{type:Number,default:20}},data:function(){return{blurImg:""}},mounted:function(){void 0!==this.$parent.blurFlag?this.$parent.blurFlag||(this.$parent.blurFlag=!0,this.initBase64(this.$parent.blurFlag)):this.initBase64()},methods:{initBase64:function(t){var a=this,n=new Image;n.src=this.blurSrc,n.onload=function(){a.$refs.blurCanvas.width=n.width,a.$refs.blurCanvas.height=n.height,s["a"](n,a.$refs.blurCanvas,a.blurValue),a.blurImg=a.$refs.blurCanvas.toDataURL(),t&&a.$emit("setBlurImg",a.blurImg)}},setBase64:function(t){this.blurImg=t}}},u=i,c=(n("110c"),n("2877")),l=Object(c["a"])(u,r,e,!1,null,"480f7286",null);a["a"]=l.exports},bf35:function(t,a,n){},c195:function(t,a,n){},c24f:function(t,a,n){"use strict";n.d(a,"b",function(){return s}),n.d(a,"a",function(){return i});var r=n("bc3a"),e=n.n(r);function s(t){return e.a.post(Object({NODE_ENV:"production",VUE_APP_VERSION:"2.0",VUE_APP_IMG_API:"http://localhost/nihongo/server/public/imgsys",BASE_URL:""}).VUE_APP_BASE_API+"/user/register",t)}function i(t,a,n){return e.a.get(Object({NODE_ENV:"production",VUE_APP_VERSION:"2.0",VUE_APP_IMG_API:"http://localhost/nihongo/server/public/imgsys",BASE_URL:""}).VUE_APP_BASE_API+"/rank/".concat(t,"/").concat(a,"/").concat(n))}},d9dd:function(t,a,n){"use strict";var r=n("bf35"),e=n.n(r);e.a}}]);
//# sourceMappingURL=chunk-66ea7a97.b29848b1.js.map