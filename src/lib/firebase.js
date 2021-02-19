const config = {
    apiKey: "AIzaSyCZ0F-CE_bWdlMP6trCIhUENyvbX6hv9cQ",
    authDomain: "instagram-clone-nick.firebaseapp.com",
    projectId: "instagram-clone-nick",
    storageBucket: "instagram-clone-nick.appspot.com",
    messagingSenderId: "562416611614",
    appId: "1:562416611614:web:c08cadb577a7a8a60dd90f"
}

const firebase = window.firebase.initializeApp(config);

export { firebase };