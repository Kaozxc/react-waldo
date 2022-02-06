/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {

  apiKey: "AIzaSyCeeBFE1OtteDR34shb9GdES0gKJc5NaJA",

  authDomain: "waldo-ce88c.firebaseapp.com",

  projectId: "waldo-ce88c",

  storageBucket: "waldo-ce88c.appspot.com",

  messagingSenderId: "47869307280",

  appId: "1:47869307280:web:3536a333ca1c98854b2b15"

};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}