import React,{useState,useEffect} from 'react';
import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { collection,getFirestore,getDocs } from "firebase/firestore"; 

import firebaseConfig from "./utils/firebase"

function App() {

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const [blogs,setBlogs]=useState([])
  useEffect(() => {
    fetchBlogs();
  }, [])

  const fetchBlogs=async()=>{    
    const data= await getDocs(collection(db, "user"));
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
}


  
 
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         {blogs && blogs.map(blog=>{
           return(
            <div className="blog-container">
              <h4>{blog.message}</h4>
             
            </div>
            )})}
     
        
      </header>
    </div>
  );
}

export default App;
