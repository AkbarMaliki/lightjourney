(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-blog-index"],{"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("1dde"),i=n("ae40"),c=a("filter"),s=i("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},a15b:function(t,e,n){"use strict";var r=n("23e7"),o=n("44ad"),a=n("fc6a"),i=n("a640"),c=[].join,s=o!=Object,l=i("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),i=n("ae40"),c=a("map"),s=i("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),a=n("56ef"),i=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),o=c.f,l=a(r),d={},u=0;while(l.length>u)n=o(r,e=l[u++]),void 0!==n&&s(d,e,n);return d}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),a=n("fc6a"),i=n("06cf").f,c=n("83ab"),s=o((function(){i(1)})),l=!c||s;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(a(t),e)}})},faeb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2 pl-3"},[n("br"),n("br"),n("br"),n("div",{staticStyle:{position:"fixed"}},t._l(t.content,(function(e,r){return n("a",{key:r+"content",staticClass:"no-style scrollactive-item list-group-item d-flex justify-content-between align-items-center hover:bg-grey cursor-pointer ",staticStyle:{overflow:"hidden","font-size":"14px","font-weight":"bold","text-transform":"uppercase"},style:[{fontWeight:"H2"==e.type?"bold":"normal"},{paddingLeft:"H3"==e.type?"40px":""}],attrs:{href:"#"+e.content.replace(/[^a-zA-Z0-9]/g,"").split(" ").join("")}},[t._v(t._s(e.content))])})),0)]),n("div",{staticClass:"col-10 pr-3"},[n("hr",{staticClass:"style13"}),n("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[n("span",{staticClass:"typcn typcn-arrow-left"}),t._v(" Back ")]),n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.rahasia}},[n("span",{staticClass:"typcn typcn-edit"}),t._v(" Edit ")]),n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:t.rahasia2}},[n("span",{staticClass:"typcn typcn-delete"}),t._v(" delete ")]),t.ready?n("div",[n("div",{domProps:{innerHTML:t._s(t.datanya.content)}})]):t._e()])])])},o=[],a=(n("4160"),n("a15b"),n("d81d"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("5530")),i=(n("bc3a"),n("8aa5")),c=n.n(i),s=c.a.firestore(),l={data:function(){return{datanya:{},ready:!1,content:[]}},methods:{rahasia:function(){"lightjourney"==prompt("secret code?")?this.$router.push("/blog/edit?id=".concat(this.$route.query.id)):alert("secret code salah!")},rahasia2:function(){"lightjourney"==prompt("secret code?")?this.delets(this.$route.query.id):alert("secret code salah!")},delets:function(t){var e=this;confirm("Apakah yakin mendelete file?")&&(s.collection("listlightjourney").where("idnya","==",this.$route.query.id).get().then((function(t){var e=t.docs.map((function(t){return Object(a["a"])({id:t.id},t.data())}));e=e[0],s.collection("listlightjourney").doc(e.id).delete().then((function(t){console.log("berhasil delete")}))})),s.collection("lightjourney").doc(t).delete().then((function(t){alert("berhasil delete"),setTimeout((function(){e.$router.push("/")}),3e3)})))},modified:function(){var t=this,e=this,n="";this.$el.querySelectorAll("h2, h3").forEach((function(t){n=t.textContent.replace(/[^a-zA-Z0-9]/g,"");var r={content:t.textContent,type:t.nodeName};e.content.push(r),"H3"==t.nodeName&&t.classList.add("header3"),t.id=n.split(" ").join("")})),this.$el.querySelectorAll("table").forEach((function(t){t.classList.add("table"),t.parentNode.classList.add("table-responsive")})),this.$el.querySelectorAll(".copyThis").forEach((function(n){n.style.padding="20px";var r=document.createElement("button");r.innerHTML="copy",r.style.position="absolute",r.style.right="50px",r.className+="btns btns-sm bg-white text-black font-times",r.onclick=function(){var t=window.getSelection(),r=document.createRange(),o=n;r.selectNodeContents(o),t.removeAllRanges(),t.addRange(r),document.execCommand("Copy"),e.$toast.show("Copied to clipboard")},n.parentNode.insertBefore(r,n),delete t.content[0]}))}},mounted:function(){var t=this;s.collection("lightjourney").doc(this.$route.query.id).get().then((function(e){var n=Object(a["a"])({id:e.id},e.data());t.datanya=n,t.ready=!0,setTimeout((function(){t.modified()}),1e3)}))}},d=l,u=n("2877"),f=Object(u["a"])(d,r,o,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=page-blog-index.b38395a5.js.map