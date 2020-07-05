// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.344034493973
// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyAyvbE3CBnxqV6wh4s1xTRwjKzq5zSYtRk",
  authDomain: "vuez-63625.firebaseapp.com",
  databaseURL: "https://vuez-63625.firebaseio.com",
  projectId: "vuez-63625",
  storageBucket: "vuez-63625.appspot.com",
  messagingSenderId: "527099963081",
  appId: "1:527099963081:web:6422331458f6048b098f18",
  measurementId: "G-S2B09P6X2W"
});
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
  messaging.setBackgroundMessageHandler(payload => {
    console.log(payload)
    // const notification = JSON.parse(payload.data.notification);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body
    };
    //Show the notification :)
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });