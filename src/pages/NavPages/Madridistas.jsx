import  { useEffect, useState } from "react";
import './styles/Madridistas.css';
import axios from "axios";

const baseURL = "https://real-madrid-team-fast-api.vercel.app/";

const Madridistas = () => {
  const [players, setPlayers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setPlayers(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching players:", err);
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
    <div className="madridistas-container">
      <div
        className={`box ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        {players.map((item) => (
          <div key={item.id}>
            <div>Position: {item.position}</div>
            <div>Name: {item.firstname} {item.surname}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Madridistas;
