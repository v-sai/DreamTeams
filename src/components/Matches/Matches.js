import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Matches.css";
import Loading from "../LoadingComp/Loading";
import { Link } from "react-router-dom";

function Matches() {
  const [allMatches, setAllMatches] = useState([]);

  useEffect(() => {
    getAllMatches();
  }, []);

  const getAllMatches = async () => {
    await axios
      .get("https://salty-spire-93558.herokuapp.com/matches")
      .then((matches) => {
        setAllMatches(matches.data);
      })
      .catch((err) => console.log(err));
  };

  const renderMatch = allMatches.map((item) => {
    return (
      <Link
        to={`teams/${item._id}`}
        key={item._id}
        style={{ textDecoration: "none" }}
      >
        <div className="match-card">
          <p>{item.time}</p>
          <div className="match">
            <h2>{item.team1}</h2>
            <p>vs</p>
            <h2>{item.team2}</h2>
          </div>
        </div>
      </Link>
    );
  });

  return <div>{allMatches.length ? renderMatch : <Loading />}</div>;
}

export default Matches;
