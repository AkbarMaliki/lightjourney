(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test"],{"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,c=r("1dde"),i=r("ae40"),a=c("filter"),u=i("filter");n({target:"Array",proto:!0,forced:!a||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("ade3");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},bd8c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.test}},[t._v("test")])])},o=[],c=(r("d81d"),r("5530")),i=(r("bc3a"),r("8aa5")),a=r.n(i),u=a.a.firestore(),s={data:function(){return{}},methods:{test:function(){u.collection("listlightjourney").where("idnya","==",this.$route.query.id).get().then((function(t){var e=t.docs.map((function(t){return Object(c["a"])({id:t.id},t.data())}));e=e[0],u.collection("listlightjourney").doc(e.id).delete().then((function(t){console.log("berhasil delete")}))}))}},mounted:function(){}},f=s,d=r("2877"),b=Object(d["a"])(f,n,o,!1,null,null,null);e["default"]=b.exports},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,c=r("1dde"),i=r("ae40"),a=c("map"),u=i("map");n({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),c=r("56ef"),i=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=a.f,s=c(n),f={},d=0;while(s.length>d)r=o(n,e=s[d++]),void 0!==r&&u(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),c=r("fc6a"),i=r("06cf").f,a=r("83ab"),u=o((function(){i(1)})),s=!a||u;n({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})}}]);
//# sourceMappingURL=page-test.e79763aa.js.map