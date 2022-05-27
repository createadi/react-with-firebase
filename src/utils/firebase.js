
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs,addDoc,getFirestore } from "firebase/firestore"; 
const dotenv = require('dotenv');
dotenv.config();

//Set Up the .env file with all the details
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initializing the Cloudstore Database
const db = getFirestore(app);

// Example code for user to post data to the database
async function postData(databaseName,collectionName, messageData){
  
    try {
        const docRef = await addDoc(collection(databaseName, collectionName), {
          message: messageData         
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

// Boilerplate code for Fetching Data from Firestore Cloudstore Database
// async function getData(){
    
//     const querySnapshot = await getDocs(collection(db, "user"));

//     querySnapshot.forEach((doc) => {
//         return(`${doc.id} => ${doc.data().message}`);
//     });

// }
// postData(db,"user","Hello from Server. Love you 3000 ❤️")
// getData(db,"user")
export default firebaseConfig;