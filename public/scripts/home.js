// document.addEventListener('DOMContentLoaded', function () {

//     var provider = new firebase.auth.GoogleAuthProvider();
//     try {
//         let app = firebase.app();

//         let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[
//             feature] ===
//             'function');
//         document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
//     } catch (e) {
//         console.error(e);
//         document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
//     }

//     function signin() {

//         firebase.auth().signInWithRedirect(provider);
//     }
//     firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//             let data;
//             console.log(user.email);
//             var db = firebase.database();
//             var ref = db.ref("/");
//             userEmailid = `${user.email}`;
//             const regex = /\./;
//             var p1 = userEmailid.replace(regex, '_');
//             var p2 = p1.replace(regex, '_')
//             console.log(p2);
//             let userref = db.ref(`/users/${user.uid}`);

//             // Attach an asynchronous callback to read the data at our posts reference
//             ref.on("value", function (snapshot) {
//                 data = snapshot.val();
//                 users = data.users;
//                 userIds = data.userids;
//                 let userCheck = userIds.includes("udit.sia@gmail.com");
//                 if (userCheck) {
//                     userref.set({
//                         emailid: `${user.email}`
//                     });
//                 } else {
//                     console.log("Not registered")
//                 }

//             }, function (errorObject) {
//                 console.log("The read failed: " + errorObject.code);
//             });

//         } else {
//             console.log("User not found")
//             //http://localhost:5000/
//             //window.location = 'https://orca-smart.web.app/';
//             window.location = `https://orca-smart.web.app/`;
//         }

//     });
//     const signoutBtn = document.querySelector('.signout');
//     signoutBtn.addEventListener('click', signout);

//     function signout() {
//         firebase.auth().signOut().then(function () {
//             // Sign-out successful.
//             //http://localhost:5000/
//             //window.location = 'https://wilink.web.app/';
//             window.location = `https://wilink.web.app/`;
//         }).catch(function (error) {
//             // An error happened.
//         });
//     }
// });