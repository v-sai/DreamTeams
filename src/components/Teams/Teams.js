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

    // console.log(i);
    return (
      <div key={i} className="team">
        {team.map((player) => {
          return (
            <div style={applyStyle(player.role)} key={player._id}>
              {player.name}
            </div>
          );
        })}
      </div>
    );
  });

  return <div>{allTeams.length ? renderTeams : <Loading />}</div>;
}

export default Teams;
