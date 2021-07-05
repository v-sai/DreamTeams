import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../LoadingComp/Loading";
import "./Teams.css";

function Teams(props) {
  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://salty-spire-93558.herokuapp.com/getgeneratedteams/" +
          props.match.params.matchId
      )
      .then((result) => {
        setAllTeams(result.data[0].teams);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.matchId]);

  const renderTeams = allTeams.map((team, i) => {
    const wkStyle = {
      color: "#FF0000",
    };
    const batStyle = {
      color: "#0E6101",
    };
    const allStyle = {
      color: "#FD19AF",
    };
    const bowlStyle = {
      color: "#456D84",
    };

    const applyStyle = (role) => {
      switch (role) {
        case "wk":
          return wkStyle;
        case "bat":
          return batStyle;
        case "all":
          return allStyle;
        case "bowl":
          return bowlStyle;
        default:
          return { color: "black" };
      }
    };

    return (
      <div key={i} className="team">
        <p style={{ color: "#532054" }}>{i + 1}</p>
        <p style={applyStyle(team[0].role)}>{team[0].name}</p>
        <p style={applyStyle(team[1].role)}>{team[1].name}</p>
        <p style={applyStyle(team[2].role)}>{team[2].name}</p>
        <p style={applyStyle(team[3].role)}>{team[3].name}</p>
        <p style={applyStyle(team[4].role)}>{team[4].name}</p>
        <p style={applyStyle(team[5].role)}>{team[5].name}</p>
        <p style={applyStyle(team[6].role)}>{team[6].name}</p>
        <p style={applyStyle(team[7].role)}>{team[7].name}</p>
        <p style={applyStyle(team[8].role)}>{team[8].name}</p>
        <p style={applyStyle(team[9].role)}>{team[9].name}</p>
        <p style={applyStyle(team[10].role)}>{team[10].name}</p>
        <p style={{ color: "#4c2a7c" }}>{team[11]}</p>
      </div>
    );
  });

  return <div>{allTeams.length ? renderTeams : <Loading />}</div>;
}

export default Teams;
