(function(e){function a(a){for(var o,r,c=a[0],s=a[1],l=a[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],o=!0,r=1;r<t.length;r++){var c=t[r];0!==n[c]&&(o=!1)}o&&(i.splice(a--,1),e=s(s.s=t[0]))}return e}var o={},r={app:0},n={app:0},i=[];function c(e){return s.p+"js/"+({"page-about":"page-about","page-auth-changepassword":"page-auth-changepassword","page-auth-dashboard":"page-auth-dashboard","page-auth-login":"page-auth-login","page-auth-register":"page-auth-register","page-blog-edit":"page-blog-edit","page-blog-index":"page-blog-index","page-blog-new":"page-blog-new","page-index":"page-index","page-laporan-index":"page-laporan-index","page-laporan-perdata":"page-laporan-perdata","page-laporan-print":"page-laporan-print","page-test":"page-test"}[e]||e)+"."+{"chunk-63931e28":"db3e1182","chunk-db63e91e":"6287da8a","page-about":"1cdff245","page-auth-changepassword":"bdf9d14b","page-auth-dashboard":"ea5082a0","page-auth-login":"21199e5a","page-auth-register":"e146b22e","page-blog-edit":"c34fed2b","page-blog-index":"cc4dc0c1","page-blog-new":"85e5d826","page-index":"80a43fb5","page-laporan-index":"8ef2db6a","page-laporan-perdata":"ef3f6616","page-laporan-print":"6e566025","page-test":"e79763aa"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var a=[],t={"chunk-63931e28":1,"chunk-db63e91e":1,"page-laporan-perdata":1,"page-laporan-print":1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var o="css/"+({"page-about":"page-about","page-auth-changepassword":"page-auth-changepassword","page-auth-dashboard":"page-auth-dashboard","page-auth-login":"page-auth-login","page-auth-register":"page-auth-register","page-blog-edit":"page-blog-edit","page-blog-index":"page-blog-index","page-blog-new":"page-blog-new","page-index":"page-index","page-laporan-index":"page-laporan-index","page-laporan-perdata":"page-laporan-perdata","page-laporan-print":"page-laporan-print","page-test":"page-test"}[e]||e)+"."+{"chunk-63931e28":"cd3c440b","chunk-db63e91e":"db95ce86","page-about":"31d6cfe0","page-auth-changepassword":"31d6cfe0","page-auth-dashboard":"31d6cfe0","page-auth-login":"31d6cfe0","page-auth-register":"31d6cfe0","page-blog-edit":"31d6cfe0","page-blog-index":"31d6cfe0","page-blog-new":"31d6cfe0","page-index":"31d6cfe0","page-laporan-index":"31d6cfe0","page-laporan-perdata":"bd03f376","page-laporan-print":"c5e2c06d","page-test":"31d6cfe0"}[e]+".css",n=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===n))return a()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===o||u===n)return a()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=a,d.onerror=function(a){var o=a&&a.target&&a.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),t(i)},d.href=n;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){r[e]=0})));var o=n[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,t){o=n[e]=[a,t]}));a.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var p=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(d);var t=n[e];if(0!==t){if(t){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,t[1](p)}n[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(t,o,function(a){return e[a]}.bind(null,o));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var p=0;p<l.length;p++)a(l[p]);var d=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("c975"),t("b0c0"),t("ac1f"),t("5319");var o=t("15fd"),r=t("53ca"),n=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("a026")),i=t("9483");Object(i["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("router-view")],1)},s=[],l=(t("5c0b"),t("2877")),u={},p=Object(l["a"])(u,c,s,!1,null,null,null),d=p.exports,g=(t("d3b7"),t("8c4f")),f=t("db39"),v=t("aecd"),h=t("58ca");n["a"].use(h["a"]),n["a"].use(g["a"]);var m=Object(v["a"])((function(e){return t("a449")("./"+e+".vue")})),b=new g["a"]({mode:"hash",routes:[{path:"/",component:m,children:f["a"]}]}),y=(t("4160"),t("a434"),t("b64b"),t("159b"),t("96cf"),t("1da1")),w=t("ade3"),k=t("2f62"),x=t("8aa5"),O=t.n(x),A=t("bc3a"),S=t.n(A),j={namespaced:!0,state:{post:"ini dari modules"},getters:{},mutations:{},actions:{}},_=(t("1276"),{namespaced:!0,state:{isAuth:!1,redirect2:null},getters:{ambilGlobalData:function(e,a,t){return t.globalData}},mutations:{test:function(){console.log("tes")},goAuth:function(e,a){e.isAuth=a},cleanData:function(e){localStorage.clear(),localStorage.setItem("expireDate",null),e.auth=null;for(var a=document.cookie.split(";"),t=0;t<a.length;t++){var o=a[t],r=o.indexOf("="),n=r>-1?o.substr(0,r):o;document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},redirect2:function(e,a){e.redirect=a}},actions:{goAuth:function(e,a){var t=!a;e.commit("goAuth",t)},verify:function(e){var a=this;return S.a.get("/api/auth/verify",{headers:{Authorization:this.$auth.$storage._state["_token.local"]}}).then((function(e){a.$router.push("/")}))},autoLogout:function(e){var a=this,t=this,o=new Date,r=localStorage.getItem("expireDate");r=new Date(r),console.log(o.getTime(),r.getTime()),this.$auth.loggedIn&&o.getTime()>r.getTime()&&setTimeout((function(){alert("waktu login anda berakhir, silahkan login ulang"),t.$auth.loggedIn&&a.$auth.logout()}),3e3)}}}),D={namespaced:!0,state:{data:!1,version:0},getters:{},mutations:{},actions:{addData:function(e,a){e.state.data=a},refresh:function(e,a){console.log("refresh"),S.a.get("http://localhost:3000/api/data/kabupaten").then((function(t){e.dispatch("addData",t.data.data.data),e.state.version=a,localStorage.setItem("vuex",JSON.stringify(e.rootState))}))}}},P={namespaced:!0,state:{data:!1,penduduk:!1,version:0},getters:{},mutations:{fillPenduduk:function(e,a){e.penduduk=a}},actions:{addData:function(e,a){e.state.data=a},refresh:function(e,a){console.log("refresh"),S.a.get("http://localhost:3000/api/data/kabupaten").then((function(t){e.dispatch("addData",t.data.data.data),e.state.version=a,localStorage.setItem("vuex",JSON.stringify(e.rootState))}))}}};t("bfa9"),t("3e8f");n["a"].use(k["a"]);var R=t("7e59"),T=function(){var e;return new k["a"].Store({modules:{backup:j,blog:D,desa:P,auth:_},state:(e={name:"taufik",wali:!1,wali_kelas:!1,notifikasi:[],notifikasiContoh:{id_notifikasi:1,id_user:2,button:3,dibaca:!1,app:"driver",link:"",text:""},mediaQ:"XL",users:null,interval:{},nossr:!1,kabupaten:[],kecamatan:[],provinsi:[],gpscount:[],gpsuniq:[],watchgps:{},scroll:0,user:!1,busy:!1,
//! ITEMS:
kategori:[],prints:{jabatan:"Kepala Desa",namaPerangkat:".............................."},print2:{jabatan:"Kepala Desa",namaPerangkat:".............................."},version:"1.0",indexdb:"workbox-precache-https___lightjourney_now_sh_",device:"web",url:R.baseURL,database:R.database},Object(w["a"])(e,"version",0),Object(w["a"])(e,"drivers",{}),e),mutations:{requestDriver:function(e,a){console.log(e),console.log(a),e.drivers.driver=a},inputRequest:function(e,a){console.log(e),console.log(a),e.drivers.request=a},goAuth:function(e){e.auth.isAuth=!0},vuex:function(e){localStorage.setItem("vuex",JSON.stringify(e))},xeuv:function(e){for(var a in e)"user"!=a&&(e[a]=JSON.parse(localStorage.getItem("vuex"))[a])},changeUser:function(e,a){e.user=a},changeUsers:function(e,a){e.users=a},busy:function(e,a){e.busy=a},addKategori:function(e,a){e.kategori=a},mediaQueries:function(e,a){e.mediaQ=a},scrollY:function(e,a){e.scroll=a},nossr:function(e,a){e.nossr=a},editData:function(e,a){var t=a.index;delete a.index;var o=Object.keys(a);o.forEach((function(o){e.users[t][o]=a[o]})),console.log(e.users)},saveData:function(e,a){var t={},o=Object.keys(e.users[0]);o.forEach((function(e){t[e]=a[e]?a[e]:"null"})),e.users.push(t)},deleteData:function(e,a){e.users.splice(a,1)},refreshData:function(e,a){e.auth.user=a.users,e.auth.user.picture=a.users.picture,e.user=a.users,e.kategori=a.kategoris,e.notifikasi=a.notifikasis},setNotifikasi:function(e,a){e.notifikasi=a},newNotifikasi:function(e,a){e.notifikasi.push(a)},logout:function(e){e.user=!1,e.users=!1},refreshUser:function(e,a){e.user=a}},actions:{perangkat:function(e,a){e.state.prints.jabatan=JSON.parse(a).Jabatan,e.state.prints.namaPerangkat=JSON.parse(a).Nama,e.state.print2.jabatan=JSON.parse(a).Jabatan,e.state.print2.namaPerangkat=JSON.parse(a).Nama,console.log(e.state.print2)},version:function(e,a){console.log("ganti version"),console.log(a),e.state.version=a,console.log(e.state.version)},auth:function(){"false"==localStorage.getItem("auth._token.local")&&"false"==localStorage.getItem("auth.local")&&b.push("/")},setNotifikasi:function(e,a){e.commit("setNotifikasi",a)},newNotifikasi:function(e,a){e.commit("newNotifikasi",a)},reLogin:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.error=null,t=new Date,localStorage.setItem("expireDate",new Date(t.getTime()+36e5)),a.abrupt("return",e.$auth.loginWith("local",{data:{username:e.$store.state.auth.user.username,password:e.password,reLogin:!0}}).catch((function(a){e.error=a+""})));case 4:case"end":return a.stop()}}),a)})))()},refreshData:function(e){return Object(y["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.state.auth.loggedIn){a.next=6;break}return a.next=3,S.a.get("/api/refreshdata/"+e.state.auth.user._id,{headers:{Authorization:localStorage.getItem("auth._token.local")}});case 3:t=a.sent,console.log(t.data),e.commit("refreshData",t.data);case 6:case"end":return a.stop()}}),a)})))()},notification:function(e,a){var t=this,o=new FormData;o.append("data","select fcm from tbuser where id='".concat(a.fcm,"'")),o.append("database","infolay3_test"),S.a.post("https://infolayanans.space/api/mysql/auto.php",o,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){console.log("notifid",e);var o={data:{title:"JR-BTN Banjarbaru",body:a.isi,surveyID:"ewtawgreg-gragrag-rgarhthgbad",soundname:"default",ledColor:[255,255,128,16],vibrationPattern:[250,1e3,250,500]},to:e.data[0].fcm,priority:"high",content_available:!0};S.a.post("https://fcm.googleapis.com/fcm/send",JSON.stringify(o),{headers:{Authorization:"key=AAAAUBoNxhU:APA91bGmp6193yTOWq0XcUu4adMjbF4XVk2uqDy8V-1y7pT26S_Q1kVkYTSyLBsgU-B4lUyYDMykMKtuiQWlVeYIEr713d5Ty0GphyUxcGlMb1D1uKsOPZ4LujfYzke2qdnZOBYEMzdm","Content-type":"application/json"}}).then((function(e){console.log(e),t.$forceUpdate()})),t.$forceUpdate()}))},scramble:function(e,a){return Object(y["a"])(regeneratorRuntime.mark((function e(){var t,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t="",o="",r=0;r<a.length;r++)t="",t=a.charAt(r),"a"==t?t=t.replace("a","x"):"b"==t?t=t.replace("b","v"):"c"==t?t=t.replace("c","u"):"d"==t?t=t.replace("d","w"):"e"==t?t=t.replace("e","y"):"f"==t?t=t.replace("f","z"):"g"==t?t=t.replace("g","t"):"h"==t?t=t.replace("h","s"):"i"==t?t=t.replace("i","r"):"j"==t?t=t.replace("j","q"):"k"==t?t=t.replace("k","p"):"l"==t?t=t.replace("l","o"):"m"==t?t=t.replace("m","n"):"z"==t?t=t.replace("z","f"):"y"==t?t=t.replace("y","e"):"x"==t?t=t.replace("x","a"):"w"==t?t=t.replace("w","d"):"v"==t?t=t.replace("v","b"):"u"==t?t=t.replace("u","c"):"t"==t?t=t.replace("t","g"):"s"==t?t=t.replace("s","h"):"r"==t?t=t.replace("r","i"):"q"==t?t=t.replace("q","j"):"p"==t?t=t.replace("p","k"):"o"==t?t=t.replace("o","l"):"n"==t?t=t.replace("n","m"):"1"==t?t=t.replace("1","0"):"2"==t?t=t.replace("2","8"):"3"==t?t=t.replace("3","9"):"4"==t?t=t.replace("4","7"):"5"==t?t=t.replace("5","6"):"0"==t?t=t.replace("0","1"):"8"==t?t=t.replace("8","2"):"9"==t?t=t.replace("9","3"):"7"==t?t=t.replace("7","4"):"6"==t?t=t.replace("6","5"):" "==t?t=t.replace(" ","_"):"_"==t?t=t.replace("_"," "):"*"==t?t=t.replace("*","/"):"/"==t?t=t.replace("/","*"):","==t?t=t.replace(",","^"):"^"==t&&(t=t.replace("^",",")),o+=t;return e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))()},ceklogin:function(e,a){var t=e.commit;return new Promise((function(e,o){O.a.auth().onAuthStateChanged((function(o){o?(console.log(o.uid),O.a.firestore().collection("users").doc(o.uid).get().then((function(o){console.log(o.data()),t("changeUsers",o.data()),localStorage.setItem("users",JSON.stringify(o.data())),a&&(1==a.true||b.push(a.true)),e()}))):(console.log("user tidak ada"),a.false&&b.push(a.false))}))}))},logout:function(e){O.a.auth().signOut().then((function(){localStorage.setItem("expireDate",null),localStorage.setItem("auth._token.local",!1),localStorage.setItem("auth.local",!1),navigator.geolocation.clearWatch(e.state.watchgps),e.state.isAuth=!1,e.commit("logout",!1),b.push("/")})),"dekstop"!=e.state.device&&this.$auth.logout()},refreshUser:function(e){this.$axios.get("/api/auth/user").then((function(a){console.log(a.data),e.commit("refreshUser",a.data.user)}))},userRefresh:function(e){e.commit("refreshUser",this.$auth.user)}}})},E=T,L=t("c3b3"),$=t.n(L),N=t("59ca"),C=t.n(N),M=(t("ea7b"),t("588e"),t("66ce"),t("e71f"),t("741f"),t("000b"),t("2169")),U=t("f92d"),q=t.n(U),z=t("96e4"),F=t.n(z),I=t("0a63"),B=t.n(I),J=(t("0808"),t("6944")),V=t.n(J),K=t("289d"),Q=(t("5abe"),t("49ab")),Y=t.n(Q),G=t("dd1e"),W=t("1321"),X=t.n(W),Z=t("5b6c"),H=t.n(Z);n["a"].use(M["a"]),//! https://github.com/egoist/vue-no-ssr
n["a"].use(X.a),n["a"].component("apexchart",X.a),n["a"].component("v-runtime-template",G["a"]),n["a"].component("no-ssr",q.a),n["a"].use(F.a),n["a"].use(B.a),n["a"].use(V.a),n["a"].use(K["a"]),n["a"].use(Y.a),n["a"].use(H.a);
//! =========================================
//! https://github.com/SortableJS/Vue.Draggable
//! https://github.com/jbaysolutions/vue-grid-layout
//! https://github.com/eddiemf/vue-scrollactive
t("466d");n["a"].directive("focus",{bind:function(){var e=this.el;n["a"].nextTick((function(){e.focus()}))}}),n["a"].directive("lazys",{bind:function(e){var a=e.src;e.classList.toggle("deactive",!0),e.addEventListener("load",(function t(){console.log("loaded"),console.log("nama image",e.src),e.src.match(/nofound.png/g)?console.log("error2"):(e.src=a,e.classList.toggle("deactive",!1)),e.removeEventListener("load",t)})),e.addEventListener("error",(function a(){e.src="/nofound.png",console.log("error"),console.log(e.src.match(/nofound.png/g)),e.removeEventListener("error",a)}))},update:function(e){console.log("update");var a=e.src;console.log(a),e.src=a}}),n["a"].directive("imgs",{bind:function(e,a){var t=e.src;e.src="/loading.gif",e.addEventListener("load",(function o(){if(console.log("loaded"),console.log("nama image",e.src),e.src.match(/nofound.png/g))console.log("error2");else{e.src=t;var r=[];e.classList.contains("myimagegroup")?a.context.$el.querySelectorAll(".myimagegroup img").forEach((function(e,t){e.style.cursor="pointer",e.onclick=function(){a.context.$nuxt.$emit("myimageactive",t)},r.push(e.src)})):a.context.$el.querySelectorAll(".myimage").forEach((function(e,t){e.style.cursor="pointer",e.onclick=function(){a.context.$nuxt.$emit("myimageactive",t)},r.push(e.src)})),a.context.$nuxt.$emit("myimage",r)}e.removeEventListener("load",o)})),e.addEventListener("error",(function a(){e.src="/nofound.png",console.log("error"),console.log(e.src.match(/nofound.png/g)),e.removeEventListener("error",a)}))},update:function(e){console.log("update");var a=e.src;console.log(a),e.src=a}}),n["a"].directive("reload",{bind:function(e,a,t){t.context.$route.hash&&setTimeout((function(){t.elm.querySelectorAll("a").forEach((function(e){e.hash==t.context.$route.hash&&e.click()}))}),2e3)}}),n["a"].directive("myimage",{bind:function(e,a,t){var o=[];setTimeout((function(){t.context.$el.querySelectorAll(".myimage").length>0&&t.context.$el.querySelectorAll(".myimage").forEach((function(e,a){e.style.cursor="pointer",o.push(e.src),e.addEventListener("click",(function(){t.context.$nuxt.$emit("myimageactive",a),t.context.$nuxt.$emit("myimage",o)}))}))}),2e3)}}),n["a"].directive("top",{bind:function(e){setTimeout((function(){console.log("hello"),e.context.$root.$el.querySelector("#top").click()}),0)}});var ee=t("2ef0"),ae=t.n(ee),te=t("340b"),oe=t.n(te),re=t("8d87"),ne=t.n(re),ie=t("cc98"),ce=t.n(ie),se=t("6aa0"),le=t.n(se),ue=t("f1dd"),pe=t.n(ue),de=S.a.create({baseURL:"http://localhost:8080"});Object.defineProperty(n["a"].prototype,"$axios",{value:de}),Object.defineProperty(n["a"].prototype,"$_",{value:ae.a}),Object.defineProperty(n["a"].prototype,"$datefns",{value:oe.a}),Object.defineProperty(n["a"].prototype,"$daycaca",{value:ne.a}),Object.defineProperty(n["a"].prototype,"$uniqid",{value:ce.a});var ge=new n["a"];Object.defineProperty(n["a"].prototype,"$nuxt",{value:ge});var fe=function(e,a,t){return fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){return new File([e],a,{type:t})}))};Object.defineProperty(n["a"].prototype,"$urltofile",{value:fe}),Object.defineProperty(n["a"].prototype,"$base64",{value:le.a}),Object.defineProperty(n["a"].prototype,"$utf8",{value:pe.a}),Object.defineProperty(n["a"].prototype,"$scramble",{value:function(e){for(var a="",t="",o=0;o<e.length;o++)a="",a=e.charAt(o),"a"==a?a=a.replace("a","x"):"b"==a?a=a.replace("b","v"):"c"==a?a=a.replace("c","u"):"d"==a?a=a.replace("d","w"):"e"==a?a=a.replace("e","y"):"f"==a?a=a.replace("f","z"):"g"==a?a=a.replace("g","t"):"h"==a?a=a.replace("h","s"):"i"==a?a=a.replace("i","r"):"j"==a?a=a.replace("j","q"):"k"==a?a=a.replace("k","p"):"l"==a?a=a.replace("l","o"):"m"==a?a=a.replace("m","n"):"z"==a?a=a.replace("z","f"):"y"==a?a=a.replace("y","e"):"x"==a?a=a.replace("x","a"):"w"==a?a=a.replace("w","d"):"v"==a?a=a.replace("v","b"):"u"==a?a=a.replace("u","c"):"t"==a?a=a.replace("t","g"):"s"==a?a=a.replace("s","h"):"r"==a?a=a.replace("r","i"):"q"==a?a=a.replace("q","j"):"p"==a?a=a.replace("p","k"):"o"==a?a=a.replace("o","l"):"n"==a?a=a.replace("n","m"):"1"==a?a=a.replace("1","0"):"2"==a?a=a.replace("2","8"):"3"==a?a=a.replace("3","9"):"4"==a?a=a.replace("4","7"):"5"==a?a=a.replace("5","6"):"0"==a?a=a.replace("0","1"):"8"==a?a=a.replace("8","2"):"9"==a?a=a.replace("9","3"):"7"==a?a=a.replace("7","4"):"6"==a?a=a.replace("6","5"):" "==a?a=a.replace(" ","_"):"_"==a?a=a.replace("_"," "):"*"==a?a=a.replace("*","/"):"/"==a?a=a.replace("/","*"):","==a?a=a.replace(",","^"):"^"==a&&(a=a.replace("^",",")),t+=a;return t}});t("f58a");
//! PAKE PWA ATAU GA ?
//! ganti ./App.vue menjadi ./layouts/default.vue
//! tambahkan router.js ke vue Instance
n["a"].use($.a,{});var ve={apiKey:"AIzaSyAyvbE3CBnxqV6wh4s1xTRwjKzq5zSYtRk",authDomain:"vuez-63625.firebaseapp.com",databaseURL:"https://vuez-63625.firebaseio.com",projectId:"vuez-63625",storageBucket:"vuez-63625.appspot.com",messagingSenderId:"527099963081",appId:"1:527099963081:web:6422331458f6048b098f18",measurementId:"G-S2B09P6X2W"};if("object"===("undefined"===typeof cordova?"undefined":Object(r["a"])(cordova)))C.a.initializeApp(ve),C.a.analytics();else if(-1!=window.location.href.indexOf("localhost:80"))C.a.initializeApp(ve),C.a.analytics();else{C.a.initializeApp(ve),C.a.analytics();var he=C.a.messaging();he.usePublicVapidKey("BOyWiIWmXY2AVZ-oe7InZFiYRrJDoIGet3J4ygFUAKXMg-WFi9heoPybaX3Syoa7UryLSGUtqUAj8wAdLM0pBM8"),he.requestPermission().then((function(){console.log("Notification permission granted."),he.getToken().then((function(e){console.log(e),localStorage.setItem("notifid",e)}))})).catch((function(e){console.log("Unable to get permission to notify.",e)})),he.onMessage((function(e){console.log("Message received. ",e);var a=e.notification;a.title,Object(o["a"])(a,["title"])}))}n["a"].config.productionTip=!1;var me=t("9224");b.beforeEach((function(e,a,t){var o=document.createElement("meta");o.setAttribute("property","og:url"),o.content=document.location.href,document.getElementsByTagName("head")[0].appendChild(o);var r=document.createElement("meta");r.setAttribute("property","og:title"),r.content=me.name+" "+e.name.replace("-"," "),document.getElementsByTagName("head")[0].appendChild(r);var n=document.createElement("meta");n.setAttribute("property","og:description"),n.content=me.name+" "+e.name.replace("-"," "),document.getElementsByTagName("head")[0].appendChild(n);var i=document.createElement("meta");i.setAttribute("name","description"),i.content=me.name+" "+e.name.replace("-"," "),document.getElementsByTagName("head")[0].appendChild(i);var c=document.createElement("meta");c.setAttribute("name","author"),c.content="Malik",document.getElementsByTagName("head")[0].appendChild(c);var s=document.createElement("meta");s.setAttribute("name","keywords"),s.content=e.name.replace("-",",")+","+me.name,document.getElementsByTagName("head")[0].appendChild(s),document.title=me.name+" "+e.name.replace("-"," "),t()})),new n["a"]({store:E,router:b,render:function(e){return e(d)},created:function(){var e=this;if(sessionStorage.redirect){var a=sessionStorage.redirect;delete sessionStorage.redirect,setTimeout((function(){e.$router.push(a)}),500)}}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var o=t("9c0c"),r=t.n(o);r.a},"7e59":function(e){e.exports=JSON.parse('{"publicKey":"BJUSmaFFmfjl8uvxY2h2A_-gccjB9AH68pwEm347rwiDhugF4KxznF5mSNS7JRa4Lah-QzPzQLuvjG1AaQJYE-U","privateKey":"b10KbQfPhouv4yXo9FQataaMq2QxDdKcpREcH2VQ8jo","mongodb":"mongodb://mrrudyska:tam05101995tam@ds151451.mlab.com:51451/mybook","mongodb2":"mongodb://maliki:05maliki@ds147974.mlab.com:47974/mongouploads","mongodb3":"mongodb://maliki:maliki05101995@ds026658.mlab.com:26658/multi","mongodbUSERNAMEPASSWORD":"mrrudyska tam05101995tam","baseURL":"http://localhost:8081","database":"https://infolayanans.space","baseURL2":"https://kantorbambans.now.sh","socket":"http://localhost:3000","ws":"ws://localhost:8000/"}')},9224:function(e){e.exports=JSON.parse('{"name":"vuez","version":"0.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","start":"serve -s dist","cordova-build-android":"cross-env CORDOVA_PLATFORM=android vue-cli-service cordova-build-android","cordova-build-browser":"cross-env CORDOVA_PLATFORM=browser vue-cli-service cordova-build-browser","cordova-build-electron":"cross-env CORDOVA_PLATFORM=electron vue-cli-service cordova-build-electron","cordova-build-ios":"cross-env CORDOVA_PLATFORM=ios vue-cli-service cordova-build-ios","cordova-build-only-www-android":"cross-env CORDOVA_PLATFORM=android vue-cli-service cordova-build-only-www-android","cordova-build-only-www-browser":"cross-env CORDOVA_PLATFORM=browser vue-cli-service cordova-build-only-www-browser","cordova-build-only-www-electron":"cross-env CORDOVA_PLATFORM=electron vue-cli-service cordova-build-only-www-electron","cordova-build-only-www-ios":"cross-env CORDOVA_PLATFORM=ios vue-cli-service cordova-build-only-www-ios","cordova-build-only-www-osx":"cross-env CORDOVA_PLATFORM=osx vue-cli-service cordova-build-only-www-osx","cordova-build-osx":"cross-env CORDOVA_PLATFORM=osx vue-cli-service cordova-build-osx","cordova-prepare":"vue-cli-service cordova-prepare","cordova-serve-android":"cross-env CORDOVA_PLATFORM=android vue-cli-service cordova-serve-android","cordova-serve-browser":"cross-env CORDOVA_PLATFORM=browser vue-cli-service cordova-serve-browser","cordova-serve-electron":"cross-env CORDOVA_PLATFORM=electron vue-cli-service cordova-serve-electron","cordova-serve-ios":"cross-env CORDOVA_PLATFORM=ios vue-cli-service cordova-serve-ios","cordova-serve-osx":"cross-env CORDOVA_PLATFORM=osx vue-cli-service cordova-serve-osx"},"dependencies":{"@fullhuman/postcss-purgecss":"^2.3.0","@johmun/vue-tags-input":"^2.1.0","@webauthn/client":"^0.1.3","@xunlei/vue-lazy-component":"^1.1.3","apexcharts":"^3.19.2","autoprefixer":"^9.8.4","axios":"^0.19.2","base-64":"^0.1.0","buefy":"^0.8.20","core-js":"^3.6.5","date-fns":"^1.30.1","daycaca":"^1.0.11","firebase":"^7.15.5","fs-extra":"^9.0.1","glob-all":"^3.2.1","iframe-resizer":"^4.2.11","leaflet":"^1.6.0","lodash":"^4.17.15","md5":"^2.2.1","moment":"^2.27.0","nedb":"^1.8.0","portal-vue":"^2.1.7","postcss-import":"^12.0.1","postcss-url":"^8.0.0","purgecss":"^2.3.0","purgecss-webpack-plugin":"^2.3.0","register-service-worker":"^1.7.1","rimraf":"^3.0.2","socket.io-client":"^2.3.0","tailwindcss":"^1.4.6","typicons.font":"^2.0.9","uniqid":"^5.2.0","utf8":"^3.0.0","v-runtime-template":"^1.10.0","v-viewer":"^1.5.1","vue":"^2.6.11","vue-apexcharts":"^1.5.3","vue-carousel":"^0.18.0","vue-drag-tree":"^1.1.8","vue-dragscroll":"^2.1.0","vue-goodshare":"^1.5.1","vue-grid-layout":"^2.3.7","vue-input-tag":"^2.0.7","vue-json-edit":"^1.4.3","vue-json-excel":"^0.2.98","vue-lazyload":"^1.3.3","vue-meta":"^2.4.0","vue-no-ssr":"^1.1.1","vue-observe-visibility":"^0.4.6","vue-router":"^3.3.4","vue-router-layout":"^0.1.5","vue-scrollactive":"^0.9.3","vue-signature-pad":"^2.0.2","vue-social-sharing":"^3.0.0-beta.11","vue-toasted":"^1.1.28","vue-touch":"^1.1.0","vue-touch-hotfix":"^2.0.0-beta.4","vue-tree-chart":"^1.2.6","vue-tree-list":"^1.4.5","vue-tree-navigation":"^4.0.1","vue-wysiwyg":"^1.7.2","vue2-editor":"^2.10.2","vue2-leaflet":"^2.5.2","vuedraggable":"^2.23.2","vuex":"^3.4.0","vuex-persist":"^2.2.0","vuex-persistedstate":"^3.0.1"},"devDependencies":{"@vue/cli-plugin-babel":"^4.4.0","@vue/cli-plugin-eslint":"^4.4.0","@vue/cli-plugin-pwa":"^4.4.0","@vue/cli-service":"^4.4.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^6.2.2","sass":"^1.26.5","sass-loader":"^8.0.2","vue-auto-routing":"^0.5.0","vue-cli-plugin-auto-routing":"^0.4.1","vue-cli-plugin-cordova":"^2.4.1","vue-template-compiler":"^2.6.11"}}')},"9c0c":function(e,a,t){},a449:function(e,a,t){var o={"./admin.vue":["8cb2","chunk-db63e91e"],"./default.vue":["7b3d","chunk-63931e28"]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=o[e],r=a[0];return t.e(a[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id="a449",e.exports=r},f58a:function(e,a,t){}});
//# sourceMappingURL=app.9ec48eb3.js.map