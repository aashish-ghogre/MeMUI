import React from "react";

import ImageComponent from "../common/ImageComponent";
import parseDateTime from "./../../helpers/common.helper";
import "./Game.css";

const GameSummary = ({ game }) => {
  const {
    start_time,
    home_team_name,
    away_team_name,
    home_team_image,
    away_team_image
  } = game;
  return (
    <div className="game-box">
      <div className="teams">
        <div className="team">
          <ImageComponent
            image={require("./../../resources/images/" + home_team_image)}
            altText={home_team_name}
          />{" "}
        </div>
        <span className="team-text">{home_team_name}</span>
        <span className="team-text">&nbsp;&nbsp; vs &nbsp;&nbsp;</span>
        <div className="team">
          <ImageComponent
            image={require("./../../resources/images/" + away_team_image)}
            altText={away_team_name}
          />{" "}
        </div>
        <span className="team-text">{away_team_name}</span>
      </div>
      <div className="date-time">
        <div>{parseDateTime(start_time).time}</div>
        <div>{parseDateTime(start_time).date}</div>
      </div>
    </div>
  );
};

export default GameSummary;
