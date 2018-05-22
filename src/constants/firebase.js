/**
 * Firebase Reference/Init
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import * as Firebase from 'firebase';
/* import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

let firebaseInitialized = false;

if (
  API_KEY !== 'null' &&
  AUTH_DOMAIN !== 'null' &&
  DATABASE_URL !== 'null' &&
  STORAGE_BUCKET !== 'null' &&
  MESSAGING_SENDER_ID !== 'null'
) {
*/
let firebaseInitialized = false;
Firebase.initializeApp({
  apiKey: 'AIzaSyBBVdIXD1hgYjrfX8YnXW9LZi4rKWJD-Bo',
  authDomain: 'geekerz-e6312.firebaseapp.com',
  databaseURL: 'https://geekerz-e6312.firebaseio.com',
  storageBucket: 'geekerz-e6312.appspot.com',
  messagingSenderId: '886405346141',
});

firebaseInitialized = true;
/* } */

export const FirebaseRef = firebaseInitialized ? Firebase.database().ref() : null;
export default firebaseInitialized ? Firebase : null;
