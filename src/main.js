import { initRouter } from './routes.js';

// Initialize Firebase

window.addEventListener('load', () => {
    var config = {
        apiKey: "AIzaSyBHKTu7luldRcwLUreGW9EqeXMQhp2K3Vw",
        authDomain: "nutrix-54e8e.firebaseapp.com",
        databaseURL: "https://nutrix-54e8e.firebaseio.com",
        projectId: "nutrix-54e8e",
        storageBucket: "nutrix-54e8e.appspot.com",
        messagingSenderId: "933739697240",
        appId: "1:933739697240:web:251213110d15aaf98de62d"
      };
    firebase.initializeApp(config);
    initRouter();

});