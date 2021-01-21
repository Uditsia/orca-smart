
let lockSwitch = document.querySelector(".switchcontainer");
let lockFlag = true;
lockSwitch.addEventListener("click", (e) => {
    lockFlag = !lockFlag;
    let lockedIcon = document.querySelector(".lockIcon");
    let unlockedIcon = document.querySelector(".unlockIcon");
    if (lockFlag) {
        lockedIcon.style.display = "inline-block";
        unlockedIcon.style.display = "none";
    } else {
        lockedIcon.style.display = "none";
        unlockedIcon.style.display = "inline-block";
    }
});
let geoNav = document.querySelector(".geo");
let geoFlag = false;
let geoCard = document.querySelector(".geoLocation");
let switchCard = document.querySelector(".switchcontainer");
let alertContainer = document.querySelector(".alertContainer");
geoNav.addEventListener("click", () => {
    geoFlag = !geoFlag;
    if (geoFlag) {
        geoCard.style.display = "inline-block";
        switchCard.style.display = "none";
    } else {
        geoCard.style.display = "none";
        switchCard.style.display = "inline-block";
    }
})
let rangeProvider = document.querySelector(".rangeP");
rangeProvider.addEventListener("change", () => {
    let output = document.querySelector("output");
    output.innerHTML = rangeProvider.value;
});

let mapInput = document.querySelector(".mapInput");
let mapIframe = document.querySelector(".map");
mapInput.addEventListener("change", () => {
    mapIframe.src = `https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=${mapInput.value}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;
});

let alertFlag = false;
let alertsTab = document.querySelector('.alerts');
let alertCard = document.querySelector('.alertContainer');
alertsTab.addEventListener("click", () => {
    alertFlag = !alertFlag;
    if (alertFlag) {
        geoCard.style.display = "none";
        switchCard.style.display = "none";
        alertCard.style.display = "inline-block";
        setTimeout(() => {
            if (confirm(`${new Date}
            Theft Alert! Check Alert log for more details. `)) {

            } else {
                txt = "You pressed Cancel!";
            }
        }, 6000)
    } else {
        geoCard.style.display = "none";
        switchCard.style.display = "inline-block";
        alertCard.style.display = "none";
    }
})

document.addEventListener('DOMContentLoaded', function () {

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


    var db = firebase.database();
    var ref = db.ref("/");
    ref.on("value", function (snapshot) {
        data = snapshot.val();
        console.log(data);
        alert();
    });


    const signoutBtn = document.querySelector('.signout');
    signoutBtn.addEventListener('click', signout);

    function signout() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            //http://localhost:5000/
            //window.location = 'https://wilink.web.app/';
            window.location = `https://orca-smart.web.app/`;
        }).catch(function (error) {
            // An error happened.
        });
    }
});