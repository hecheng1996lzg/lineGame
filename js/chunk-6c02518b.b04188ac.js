(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c02518b"],{"0bfb":function(t,n,e){"use strict";var r=e("cb7c");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"110c":function(t,n,e){"use strict";var r=e("c195"),a=e.n(r);a.a},"11e9":function(t,n,e){var r=e("52a7"),a=e("4630"),i=e("6821"),o=e("6a99"),c=e("69a8"),s=e("c69a"),u=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?u:function(t,n){if(t=i(t),n=o(n,!0),s)try{return u(t,n)}catch(e){}if(c(t,n))return a(!r.f.call(t,n),t[n])}},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"52a7":function(t,n){n.f={}.propertyIsEnumerable},"5dbc":function(t,n,e){var r=e("d3f4"),a=e("8b97").set;t.exports=function(t,n,e){var i,o=n.constructor;return o!==e&&"function"==typeof o&&(i=o.prototype)!==e.prototype&&r(i)&&a&&a(t,i),t}},"5e9e":function(t,n,e){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return c});var i=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],o=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function c(t,n,e,r){if("string"===typeof t&&(t=document.getElementById(t)),t&&"naturalWidth"in t){var a=t.naturalWidth,i=t.naturalHeight;if("string"===typeof n&&(n=document.getElementById(n)),n&&"getContext"in n){n.style.width=a+"px",n.style.height=i+"px",n.width=a,n.height=i;var o=n.getContext("2d");o.clearRect(0,0,a,i),o.drawImage(t,0,0),isNaN(e)||e<1||(r?u(n,0,0,a,i,e):f(n,0,0,a,i,e))}}}function s(t,n,e,a,i){if("string"===typeof t&&(t=document.getElementById(t)),!t||"object"!==r(t)||!("getContext"in t))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");var o=t.getContext("2d");try{return o.getImageData(n,e,a,i)}catch(c){throw new Error("unable to access image data: "+c)}}function u(t,n,e,r,a,i){if(!(isNaN(i)||i<1)){i|=0;var o=s(t,n,e,r,a);o=l(o,n,e,r,a,i),t.getContext("2d").putImageData(o,n,e)}}function l(t,n,e,r,a,c){var s,u,l,f,b,p,d,h,v,m,y,x,C,I,_,w,E,S,N,A,k,$,R,F,O,j=t.data,B=2*c+1,T=r-1,V=a-1,P=c+1,D=P*(P+1)/2,G=new g,L=G;for(l=1;l<B;l++)L=L.next=new g,l===P&&(O=L);L.next=G;var M=null,z=null;d=p=0;var U=i[c],J=o[c];for(u=0;u<a;u++){for(w=E=S=N=h=v=m=y=0,x=P*(A=j[p]),C=P*(k=j[p+1]),I=P*($=j[p+2]),_=P*(R=j[p+3]),h+=D*A,v+=D*k,m+=D*$,y+=D*R,L=G,l=0;l<P;l++)L.r=A,L.g=k,L.b=$,L.a=R,L=L.next;for(l=1;l<P;l++)f=p+((T<l?T:l)<<2),h+=(L.r=A=j[f])*(F=P-l),v+=(L.g=k=j[f+1])*F,m+=(L.b=$=j[f+2])*F,y+=(L.a=R=j[f+3])*F,w+=A,E+=k,S+=$,N+=R,L=L.next;for(M=G,z=O,s=0;s<r;s++)j[p+3]=R=y*U>>J,0!==R?(R=255/R,j[p]=(h*U>>J)*R,j[p+1]=(v*U>>J)*R,j[p+2]=(m*U>>J)*R):j[p]=j[p+1]=j[p+2]=0,h-=x,v-=C,m-=I,y-=_,x-=M.r,C-=M.g,I-=M.b,_-=M.a,f=d+((f=s+c+1)<T?f:T)<<2,w+=M.r=j[f],E+=M.g=j[f+1],S+=M.b=j[f+2],N+=M.a=j[f+3],h+=w,v+=E,m+=S,y+=N,M=M.next,x+=A=z.r,C+=k=z.g,I+=$=z.b,_+=R=z.a,w-=A,E-=k,S-=$,N-=R,z=z.next,p+=4;d+=r}for(s=0;s<r;s++){for(E=S=N=w=v=m=y=h=0,p=s<<2,x=P*(A=j[p]),C=P*(k=j[p+1]),I=P*($=j[p+2]),_=P*(R=j[p+3]),h+=D*A,v+=D*k,m+=D*$,y+=D*R,L=G,l=0;l<P;l++)L.r=A,L.g=k,L.b=$,L.a=R,L=L.next;for(b=r,l=1;l<=c;l++)p=b+s<<2,h+=(L.r=A=j[p])*(F=P-l),v+=(L.g=k=j[p+1])*F,m+=(L.b=$=j[p+2])*F,y+=(L.a=R=j[p+3])*F,w+=A,E+=k,S+=$,N+=R,L=L.next,l<V&&(b+=r);for(p=s,M=G,z=O,u=0;u<a;u++)f=p<<2,j[f+3]=R=y*U>>J,R>0?(R=255/R,j[f]=(h*U>>J)*R,j[f+1]=(v*U>>J)*R,j[f+2]=(m*U>>J)*R):j[f]=j[f+1]=j[f+2]=0,h-=x,v-=C,m-=I,y-=_,x-=M.r,C-=M.g,I-=M.b,_-=M.a,f=s+((f=u+P)<V?f:V)*r<<2,h+=w+=M.r=j[f],v+=E+=M.g=j[f+1],m+=S+=M.b=j[f+2],y+=N+=M.a=j[f+3],M=M.next,x+=A=z.r,C+=k=z.g,I+=$=z.b,_+=R=z.a,w-=A,E-=k,S-=$,N-=R,z=z.next,p+=r}return t}function f(t,n,e,r,a,i){if(!(isNaN(i)||i<1)){i|=0;var o=s(t,n,e,r,a);o=b(o,n,e,r,a,i),t.getContext("2d").putImageData(o,n,e)}}function b(t,n,e,r,a,c){var s,u,l,f,b,p,d,h,v,m,y,x,C,I,_,w,E,S,N,A,k,$=t.data,R=2*c+1,F=r-1,O=a-1,j=c+1,B=j*(j+1)/2,T=new g,V=T;for(l=1;l<R;l++)V=V.next=new g,l===j&&(k=V);V.next=T;var P=null,D=null;d=p=0;var G=i[c],L=o[c];for(u=0;u<a;u++){for(I=_=w=h=v=m=0,y=j*(E=$[p]),x=j*(S=$[p+1]),C=j*(N=$[p+2]),h+=B*E,v+=B*S,m+=B*N,V=T,l=0;l<j;l++)V.r=E,V.g=S,V.b=N,V=V.next;for(l=1;l<j;l++)f=p+((F<l?F:l)<<2),h+=(V.r=E=$[f])*(A=j-l),v+=(V.g=S=$[f+1])*A,m+=(V.b=N=$[f+2])*A,I+=E,_+=S,w+=N,V=V.next;for(P=T,D=k,s=0;s<r;s++)$[p]=h*G>>L,$[p+1]=v*G>>L,$[p+2]=m*G>>L,h-=y,v-=x,m-=C,y-=P.r,x-=P.g,C-=P.b,f=d+((f=s+c+1)<F?f:F)<<2,I+=P.r=$[f],_+=P.g=$[f+1],w+=P.b=$[f+2],h+=I,v+=_,m+=w,P=P.next,y+=E=D.r,x+=S=D.g,C+=N=D.b,I-=E,_-=S,w-=N,D=D.next,p+=4;d+=r}for(s=0;s<r;s++){for(_=w=I=v=m=h=0,p=s<<2,y=j*(E=$[p]),x=j*(S=$[p+1]),C=j*(N=$[p+2]),h+=B*E,v+=B*S,m+=B*N,V=T,l=0;l<j;l++)V.r=E,V.g=S,V.b=N,V=V.next;for(b=r,l=1;l<=c;l++)p=b+s<<2,h+=(V.r=E=$[p])*(A=j-l),v+=(V.g=S=$[p+1])*A,m+=(V.b=N=$[p+2])*A,I+=E,_+=S,w+=N,V=V.next,l<O&&(b+=r);for(p=s,P=T,D=k,u=0;u<a;u++)f=p<<2,$[f]=h*G>>L,$[f+1]=v*G>>L,$[f+2]=m*G>>L,h-=y,v-=x,m-=C,y-=P.r,x-=P.g,C-=P.b,f=s+((f=u+j)<O?f:O)*r<<2,h+=I+=P.r=$[f],v+=_+=P.g=$[f+1],m+=w+=P.b=$[f+2],P=P.next,y+=E=D.r,x+=S=D.g,C+=N=D.b,I-=E,_-=S,w-=N,D=D.next,p+=r}return t}var g=function t(){a(this,t),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}},"6b54":function(t,n,e){"use strict";e("3846");var r=e("cb7c"),a=e("0bfb"),i=e("9e1e"),o="toString",c=/./[o],s=function(t){e("2aba")(RegExp.prototype,o,t,!0)};e("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)}):c.name!=o&&s(function(){return c.call(this)})},"8b97":function(t,n,e){var r=e("d3f4"),a=e("cb7c"),i=function(t,n){if(a(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(a){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},9093:function(t,n,e){var r=e("ce10"),a=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},aa77:function(t,n,e){var r=e("5ca1"),a=e("be13"),i=e("79e5"),o=e("fdef"),c="["+o+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,n,e){var a={},c=i(function(){return!!o[t]()||s[t]()!=s}),u=a[t]=c?n(b):o[t];e&&(a[e]=u),r(r.P+r.F*c,"String",a)},b=f.trim=function(t,n){return t=String(a(t)),1&n&&(t=t.replace(u,"")),2&n&&(t=t.replace(l,"")),t};t.exports=f},adb3:function(t,n,e){"use strict";var r=e("e91d"),a=e.n(r);a.a},b0e0:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"blur",attrs:{id:"blur"}},[e("div",{staticClass:"blur-bg",style:{backgroundImage:"url("+t.blurImg+")",borderRadius:t.bR,boxShadow:t.bS}},[e("canvas",{ref:"blurCanvas",staticClass:"res"})]),e("div",{staticClass:"blur-content"},[t._t("default")],2)])},a=[],i=(e("c5f6"),e("5e9e")),o={name:"blur",props:{blurSrc:{type:String},bR:{type:String,default:"10px"},bS:{type:String,default:"0 10px 20px rgba(0, 0, 0, 0.3)"},blurValue:{type:Number,default:20}},data:function(){return{blurImg:""}},mounted:function(){void 0!==this.$parent.blurFlag?this.$parent.blurFlag||(this.$parent.blurFlag=!0,this.initBase64(this.$parent.blurFlag)):this.initBase64()},methods:{initBase64:function(t){var n=this,e=new Image;e.src=this.blurSrc,e.onload=function(){n.$refs.blurCanvas.width=e.width,n.$refs.blurCanvas.height=e.height,i["a"](e,n.$refs.blurCanvas,n.blurValue),n.blurImg=n.$refs.blurCanvas.toDataURL(),t&&n.$emit("setBlurImg",n.blurImg)}},setBase64:function(t){this.blurImg=t}}},c=o,s=(e("110c"),e("2877")),u=Object(s["a"])(c,r,a,!1,null,"480f7286",null);n["a"]=u.exports},c195:function(t,n,e){},c5f6:function(t,n,e){"use strict";var r=e("7726"),a=e("69a8"),i=e("2d95"),o=e("5dbc"),c=e("6a99"),s=e("79e5"),u=e("9093").f,l=e("11e9").f,f=e("86cc").f,b=e("aa77").trim,g="Number",p=r[g],d=p,h=p.prototype,v=i(e("2aeb")(h))==g,m="trim"in String.prototype,y=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=m?n.trim():b(n,3);var e,r,a,i=n.charCodeAt(0);if(43===i||45===i){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+n}for(var o,s=n.slice(2),u=0,l=s.length;u<l;u++)if(o=s.charCodeAt(u),o<48||o>a)return NaN;return parseInt(s,r)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof p&&(v?s(function(){h.valueOf.call(e)}):i(e)!=g)?o(new d(y(n)),e,p):y(n)};for(var x,C=e("9e1e")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)a(d,x=C[I])&&!a(p,x)&&f(p,x,l(d,x));p.prototype=h,h.constructor=p,e("2aba")(r,g,p)}},d1c0:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=this,e=n.$createElement,r=n._self._c||e;return r("blur",{attrs:{blurSrc:n.blurSrc,blurValue:30}},[r("div",{staticClass:"welcome"},[r("h2",[n._v("选择关联")]),r("ul",{staticClass:"type-select"},[r("li",{class:{active:n.modelActive(0)},on:{click:function(){t.models=[0,1]}}},[r("div",{staticClass:"type-select-item"},[r("div",{staticClass:"check"},[r("span",{staticClass:"iconfont icon-tianjiachenggong"})]),r("div",{staticClass:"content"},[n._v("\n            平假名\n            "),r("span",{staticClass:"iconfont icon-zhihuan"}),n._v("\n            片假名\n          ")])])]),r("li",{class:{active:n.modelActive(1)},on:{click:function(){t.models=[1,2]}}},[r("div",{staticClass:"type-select-item"},[r("div",{staticClass:"check"},[r("span",{staticClass:"iconfont icon-tianjiachenggong"})]),r("div",{staticClass:"content"},[n._v("\n            片假名\n            "),r("span",{staticClass:"iconfont icon-zhihuan"}),n._v("\n            罗马音\n          ")])])]),r("li",{class:{active:n.modelActive(2)},on:{click:function(){t.models=[2,0]}}},[r("div",{staticClass:"type-select-item"},[r("div",{staticClass:"check"},[r("span",{staticClass:"iconfont icon-tianjiachenggong"})]),r("div",{staticClass:"content"},[n._v("\n            罗马音\n            "),r("span",{staticClass:"iconfont icon-zhihuan"}),n._v("\n            平假名\n          ")])])])]),r("button",{staticClass:"lg",on:{click:n.start}},[n._v("开始游戏")])])])},a=[],i=(e("6b54"),e("cadf"),e("551c"),e("097d"),e("b0e0")),o={name:"welcome",props:{blurSrc:{type:String}},data:function(){return{models:[0,1]}},computed:{modelActive:function(){var t=this;return function(n){return t.models[0]===n}}},methods:{start:function(){this.$router.push({name:"start",params:{model1:this.models[0].toString(),model2:this.models[1].toString()}})}},mounted:function(){this.$emit("gameInit")},components:{Blur:i["a"]}},c=o,s=(e("adb3"),e("2877")),u=Object(s["a"])(c,r,a,!1,null,"4c47dfb2",null);n["default"]=u.exports},e91d:function(t,n,e){},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-6c02518b.b04188ac.js.map