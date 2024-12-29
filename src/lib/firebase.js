import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDfQv0Kka7g_BBbMHzWXDHV8teGhtCpVRM",
    authDomain: "metricstool-aacc5.firebaseapp.com",
    projectId: "metricstool-aacc5",
    storageBucket: "metricstool-aacc5.firebasestorage.app",
    messagingSenderId: "958138157258",
    appId: "1:958138157258:web:cb8985894ed88e310c0c33",
    measurementId: "G-8SH2NGE0V6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
export default db;
