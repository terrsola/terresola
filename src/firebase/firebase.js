import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDAhEeMS7jNDhA8OfPzAOnLdTKns_TcEJk",
    authDomain: "crm-noe-osorio.firebaseapp.com",
    projectId: "crm-noe-osorio",
    storageBucket: "crm-noe-osorio.appspot.com",
    messagingSenderId: "1069700412951",
    appId: "1:1069700412951:web:8c68b51aa128a4af7e4e52",
    measurementId: "G-1SYYE3TLS4"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);