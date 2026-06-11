import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

 apiKey: "AIzaSyDVDnZ-GWHE8_4gLd4zRPTJGuwIMsyIK0Q",

 authDomain: "vendedor-html.firebaseapp.com",

 projectId: "vendedor-html",

 storageBucket: "vendedor-html.firebasestorage.app",

 messagingSenderId: "649120787576",

 appId: "1:649120787576:web:7967250e4f0175b5d9518d"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
