const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
    return admin.firestore().collection("notifications")
        .add(notification)
        .then((doc) => console.log("notification added", doc));
    });

exports.createMessage = functions.firestore
    .document("messages/{id}").onCreate((doc) => {
        const message = doc.data();
        const notification = {
            content: "send a message to",
            user: `${message.displayName}`,
            id: `${message.uid}`,
            photo: `${message.photoURL}`,
            room: `${message.room}`,
            isRead: "false",
            time: admin.firestore.FieldValue.serverTimestamp(),
        };
    return createNotification(notification);
});
