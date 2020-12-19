document.addEventListener('DOMContentLoaded', function () {
    var actualInnerWidth = document.body.clientWidth; // El. width minus scrollbar width
    var actualInnerWidth = document.body.scrollWidth;
    const screenWidth = window.screen.width;
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    html.width = screenWidth;
    body.width = actualInnerWidth;
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.email);
            //http://localhost:5000/home
            //https://wilink.web.app/home
            window.location = 'https://orca-smart.web.app/home';
        }

    });

    try {
        let app = firebase.app();
        const epsigninBtn = document.querySelector('.epsignin');
        epsigninBtn.addEventListener('click', (e) => {
            window.location = "https://orca-smart.web.app/home";
            // epsignin()
            // e.preventDefault();
        });
        const epsignupBtn = document.querySelector('.epsignup');
        epsignupBtn.addEventListener('click', (e) => {
            epsignup()
            e.preventDefault();
        });

        function epsignin(e) {
            const email = document.querySelector('#email').value;
            const pass = document.querySelector('#pass').value;
            firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(`${errorMessage}`);
                console.log(error.code + ", " + error.message);
                // ...
            });
        }

        function epsignup(e) {
            const email1 = document.querySelector('#email1').value;
            const pass1 = document.querySelector('#pass1').value;

            firebase.auth().createUserWithEmailAndPassword(email1, pass1).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(`${errorMessage}`);
                console.log(error.code + ", " + error.message);

                // ...
            });
        }

        const signinbtn = document.querySelector('#signin');
        signinbtn.addEventListener('click', signin);
        var provider = new firebase.auth.GoogleAuthProvider();

        function signin() {

            firebase.auth().signInWithRedirect(provider);

        }

    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
    firebase.database().ref('/g').once('value').then(function (snapshot) {
        console.log(snapshot.val());
        // ...
    });
    const createAccbtn = document.querySelector('#creatAcc');
    const signinForm = document.querySelector('.signinForm');
    const signupForm = document.querySelector('.signupForm');
    const imgContain = document.querySelector('.imgContain');
    createAccbtn.addEventListener('click', (e) => {
        signinForm.style = 'display:none;';
        signupForm.style = 'display:flex;';
        imgContain.style = 'display:none';
    });
});