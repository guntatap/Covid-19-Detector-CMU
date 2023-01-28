import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// function FirebaseConfig() {
//     const firebaseConfig = {
//         apiKey: "AIzaSyC98DCP-5VIhu-iN11IoQTypqWLBalMiZo",
//         authDomain: "coviddetectorcmu.firebaseapp.com",
//         databaseURL: "https://coviddetectorcmu-default-rtdb.asia-southeast1.firebasedatabase.app",
//         projectId: "coviddetectorcmu",
//         storageBucket: "coviddetectorcmu.appspot.com",
//         messagingSenderId: "157626340197",
//         appId: "1:157626340197:web:ed74a2f6dd0e7dcba9478c"
//     };
//     const app = initializeApp(firebaseConfig);
//     return getDatabase(app);
// }
// export const auth = getAuth(app);
// export default FirebaseConfig;

/* ********************************************************************************** */

const firebaseConfig = {
    apiKey: "AIzaSyC98DCP-5VIhu-iN11IoQTypqWLBalMiZo",
    authDomain: "coviddetectorcmu.firebaseapp.com",
    databaseURL: "https://coviddetectorcmu-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "coviddetectorcmu",
    storageBucket: "coviddetectorcmu.appspot.com",
    messagingSenderId: "157626340197",
    appId: "1:157626340197:web:ed74a2f6dd0e7dcba9478c"
};

const app = initializeApp(firebaseConfig);
const firestore = getDatabase(app);

export default firebaseConfig;