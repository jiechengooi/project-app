import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const config = {
	apiKey: "AIzaSyDuUnrvoUaUvbHc4XzvDfZq8lvvqskxpg4",
	authDomain: "project-app-1a1bb.firebaseapp.com",
	projectId: "project-app-1a1bb",
	storageBucket: "project-app-1a1bb.appspot.com",
	messagingSenderId: "1017609042108",
	appId: "1:1017609042108:web:ae8ff57b2ac93a4fcc78b9",
	databaseURL: "https://project-app-1a1bb-default-rtdb.firebaseio.com",
	measurementId: "G-87B0K46EL0"
};

export const app = firebase.initializeApp(config);
export const auth = app.auth();
export const db = firebase.firestore();
export const firestore = firebase.firestore;
export const increment = firebase.firestore.FieldValue.increment(1);
export const storage = firebase.storage();
export default app;
