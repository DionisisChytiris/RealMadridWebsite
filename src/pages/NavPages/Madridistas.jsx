/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './styles/Madridistas.css'
import axios from "axios";

const baseURL = "https://real-madrid-team-fast-api.vercel.app/"

const Madridistas = () => {
  const [post, setPost] = useState(
    [
      {
        position: '',
        firstname: ''
      }
    ]
  )

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://real-madrid-team-fast-api.vercel.app/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setPost(response.data);
        console.log(response.data)
        // setLoading(false);
      } catch (err) {
        console.log(err)
        // setError(err.message);
        // setLoading(false);
      }
    }
      fetchData()
  },[])

  // if (!post) return null;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  return (
    <>
  
    <div style={container}>
      <div 
       className={`box ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
        // style={{padding: '40px', backgroundColor: 'lightgreen',transition:' backgroundColor 0.3s ease, transform 0.3s ease'}}
      >
       {post.map((item) => (
          <div key={item.id}> 
            <div>Position: {item.position}</div>
            <div>Name: {item.firstname}</div>
            <div>Name: {item.firstname}</div>
          </div>
        ))}
      </div>
    
    </div>
      </>
  );
};

export default Madridistas;

const container = {
  width: "80%",
  height: "100vh",
  backgroundColor: "lightgray",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "30px",
};
