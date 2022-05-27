
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs,addDoc,getFirestore } from "firebase/firestore"; 
import { async } from "@firebase/util";



const firebaseConfig = {
  apiKey: "AIzaSyDn2S7LjA0fGMg5ooN2S5hiAXKDilcDQRw",
  authDomain: "airbus-b40bc.firebaseapp.com",
  projectId: "airbus-b40bc",
  storageBucket: "airbus-b40bc.appspot.com",
  messagingSenderId: "883099355502",
  appId: "1:883099355502:web:dcd3b64be3b0636b4d597f",
  measurementId: "G-RRJPZ0RFW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

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
// postData(db,"user","Its fun to be around..")
async function getData(){
    
    const querySnapshot = await getDocs(collection(db, "user"));

    querySnapshot.forEach((doc) => {
        return(`${doc.id} => ${doc.data().message}`);
    });

}
// postData(db,"user","Hello from Server. Love you 3000 ❤️")
// getData(db,"user")
export default firebaseConfig;