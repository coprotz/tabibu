const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// const createNotification = ((notification) => {
//     return admin.firestore().collection("notifications")
//         .add(notification)
//         .then((doc) => console.log("notification added", doc));
//     });

// exports.createMessage = functions.firestore
//     .document("messages/{id}").onCreate((doc) => {
//         const message = doc.data();
//         const notification = {
//             content: "send a message to",
//             user: `${message.displayName}`,
//             userId: `${message.uid}`,
//             photo: `${message.photoURL}`,
//             room: `${message.room}`,
//             isRead: [],
//             time: admin.firestore.FieldValue.serverTimestamp(),
//         };
//     return createNotification(notification);
// });

// exports.createAppointment = functions.firestore
//     .document("appointments/{id}").onCreate((doc) => {
//         const appoint = doc.data();
//         const notification = {
//             content: "send an appointment request to",
//             user: `${appoint.displayName}`,
//             userId: `${appoint.patientId}`,
//             photo: `${appoint.photoURL}`,
//             room: `${appoint.doctorId}`,
//             isRead: [],
//             time: admin.firestore.FieldValue.serverTimestamp(),
//         };
//     return createNotification(notification);
// });
