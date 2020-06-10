const admin = require("firebase-admin");
const serviceAccount = require('./serviceaccount.json');
const firebaseConfig = require('./config.js');



admin.initializeApp({
  credential: admin.credential.cert({
    "project_id": process.env.PROJECT_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL
  }),
  databaseURL: process.env.DB_URL,
  storageBucket: process.env.BUCKET
});

const db = admin.firestore();
const fieldValue = admin.firestore.FieldValue;
const storage = admin.storage();


module.exports = { db, fieldValue, storage }