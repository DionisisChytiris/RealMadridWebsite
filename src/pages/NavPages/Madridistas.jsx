/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./styles/Madridistas.css";
import axios from "axios";

const baseURL = "https://real-madrid-team-fast-api.vercel.app/";

const Madridistas = () => {
  const [players, setPlayers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
const [error, setError] = useState("");

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      setPlayers(response.data);
    } catch (err) {
      console.error("Error fetching players:", err);
      setError("Failed to load player data. Please try again later.");
    }
  };

  fetchData();
}, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div style={container}>
        <div
          className={`box ${isClicked ? "clicked" : ""}`}
          onClick={handleClick}
          // style={{padding: '40px', backgroundColor: 'lightgreen',transition:' backgroundColor 0.3s ease, transform 0.3s ease'}}
        >
          {players.length === 0 ? (
            <p>Loading players...</p>
          ) : (
            players.map((item) => (
              <div key={item.id}>
                <div>Position: {item.position}</div>
                <div>
                  Name: {item.firstname} {item.surname}
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
        <div>hello</div>
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
