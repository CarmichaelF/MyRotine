var db = firebase.database();

function writeUserData(notes) {
    db.ref(`/notes/${window.user}`).set(notes);
}

function loadNotes() {
    let promisse = db.ref(`/notes/${window.user}`).once('value')
        .then(function (snapshot) {
            callback(promisse, snapshot.val());
        });
}