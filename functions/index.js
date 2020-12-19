const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
let db = admin.firestore();
const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');


//db test
// let docRef = db.collection('users').doc('udit');
// let setAda = docRef.set({
//     device: `new`,
//     state: true
// }).catch(function (error) {
//     console.error("Error saving post : ", error);
//     //this code does not throw an error.
// });

app.use(bodyParser.urlencoded({
    extended: false
}));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "../public/pages"))
app.get('/adddevice', (req, res) => {

    console.log("Receaved Device state req");


    //console.log(`http Header:${req.header}`);
    updateDeviceList();
    res.send("ok");
    // res.json({ state: state });
});
app.get('/home', (req, res) => {
    res.render(`home.ejs`)
})
var listparams = {
    maxResults: 250
};






// var params = {
//     thingName: 'esp8266_8CE9B1' /* required */
// };

// iotdata.getThingShadow(params, function (err, data) {
//     let deviceShadow = JSON.parse(data.payload);
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(deviceShadow.state.reported.on); // successful response
// });







//listenforupdates()
exports.app = functions.https.onRequest(app);