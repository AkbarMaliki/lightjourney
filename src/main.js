import Vue from 'vue'
//! PAKE PWA ATAU GA ?
import './registerServiceWorker'
//! ganti ./App.vue menjadi ./layouts/default.vue
import App from './App.vue'
//! tambahkan router.js ke vue Instance
import router from './router'
import store from './store'

import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {});

import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import "firebase/analytics";  
// import 'firebase/functions';
const firebaseConfig = {
  apiKey: "AIzaSyAyvbE3CBnxqV6wh4s1xTRwjKzq5zSYtRk",
  authDomain: "vuez-63625.firebaseapp.com",
  databaseURL: "https://vuez-63625.firebaseio.com",
  projectId: "vuez-63625",
  storageBucket: "vuez-63625.appspot.com",
  messagingSenderId: "527099963081",
  appId: "1:527099963081:web:6422331458f6048b098f18",
  measurementId: "G-S2B09P6X2W"
}; 
if (typeof cordova === "object") {
 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}else{
  if(window.location.href.indexOf('localhost:80')!=-1){
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  else{
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const messaging = firebase.messaging();
    
    // Add the public key generated from the console here.
    messaging.usePublicVapidKey("BOyWiIWmXY2AVZ-oe7InZFiYRrJDoIGet3J4ygFUAKXMg-WFi9heoPybaX3Syoa7UryLSGUtqUAj8wAdLM0pBM8");
    
    messaging.requestPermission().then(() => {
      console.log('Notification permission granted.');
      messaging.getToken().then((token) => {
        console.log(token);
        localStorage.setItem('notifid',token);
      })
    }).catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
    
    messaging.onMessage(payload => {
      console.log("Message received. ", payload);
      const { title, ...options } = payload.notification;
    });
  }
}

Vue.config.productionTip = false

var pjson = require('../package.json');
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // meta ogurl
  var ogurl = document.createElement('meta');
  ogurl.setAttribute('property', 'og:url');
  ogurl.content = document.location.href;
  document.getElementsByTagName('head')[0].appendChild(ogurl);
    // meta ogtitle
    var ogtitle = document.createElement('meta');
    ogtitle.setAttribute('property', 'og:title');
    ogtitle.content = pjson.name + " " + to.name.replace('-',' ')
    document.getElementsByTagName('head')[0].appendChild(ogtitle);
        // meta ogdesc
        var ogdesc = document.createElement('meta');
        ogdesc.setAttribute('property', 'og:description');
        ogdesc.content = pjson.name + " " + to.name.replace('-',' ')
        document.getElementsByTagName('head')[0].appendChild(ogdesc);
  // meta description
  var desc = document.createElement('meta');
  desc.setAttribute('name', 'description');
  desc.content = pjson.name + " " + to.name.replace('-',' ')
  document.getElementsByTagName('head')[0].appendChild(desc);
  // Meta author 
  var author = document.createElement('meta');
  author.setAttribute('name', 'author');
  author.content = "Malik"
  document.getElementsByTagName('head')[0].appendChild(author);
  // Meta keywords 
  var keywords = document.createElement('meta');
  keywords.setAttribute('name', 'keywords');
  keywords.content = to.name.replace('-',',')+','+pjson.name
  document.getElementsByTagName('head')[0].appendChild(keywords);
  // HEAD TITLE
  document.title =  pjson.name + " " + to.name.replace('-',' ') 
  next();
});

new Vue({
  store,
  // disini
  router,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      setTimeout(() => {
        this.$router.push(redirect)
      }, 500)
    }
  }
}).$mount('#app')
//! plugin
import "./plugins/ssrno";
import "./plugins/directives";
import "./plugins/Instance";
import "./static/vueWysiwyg.css";
// import "./plugins/components";
// import "./plugins/vuexPersist";
// import "./plugins/social";
// import './plugins/peer'
// import './plugins/jquery'
