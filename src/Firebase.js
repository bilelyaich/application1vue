
import firebase from 'firebase/app';
import 'firebase/auth';  // Importez uniquement les composants nécessaires, par exemple, pour l'authentification.
import 'firebase/firestore';  // Ajoutez cette ligne si vous utilisez Firestore.
import 'firebase/storage';  // Ajoutez cette ligne si vous utilisez le stockage Firebase.


var firebaseConfig = {
  apiKey: "AIzaSyDi5XXIYlu-w_qCVnghnObcnWG5JYnaf6w",
  authDomain: "vuepfe.firebaseapp.com",
  projectId: "vuepfe",
  storageBucket: "vuepfe.appspot.com",
  messagingSenderId: "786248800199",
  appId: "1:786248800199:web:a274c4f6bc92acd1562be2",
  measurementId: "G-VMDH99W0F5"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();  // Exportez uniquement les composants dont vous avez besoin.
export const firestore = app.firestore();  // Exportez uniquement les composants dont vous avez besoin.
export const storage = app.storage();  // Exportez uniquement les composants dont vous avez besoin.

export default firebase; 