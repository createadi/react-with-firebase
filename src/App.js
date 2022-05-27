import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./utils/firebase";
import { initializeApp } from "firebase/app";

import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";

import firebaseConfig from "./utils/firebase";

function App() {
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getDocs(collection(db, "user"));
    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  };

  async function postData(databaseName, collectionName, messageData) {
    try {
      const docRef = await addDoc(collection(databaseName, collectionName), {
        message: messageData,
      });
      console.log("Document written with ID: ", docRef.id);
      window.location.reload()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          type="submit"
          href="/"
          onClick={() => {
            postData(db, "user", "Hello from Server. Love you 3000 ❤️");
          }}
        >
          Connect to Firebase
        </button>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div className="blog-container">
                <h4>{blog.message}</h4>
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
