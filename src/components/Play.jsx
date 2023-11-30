import React from "react";
import {Link} from 'react-router-dom';
import  paper from "../icons/paper.png"
import  scissor from "../icons/scissor.jpg";
import  rock from "../icons/stone.png";
import "../styles/play.css"

function Play({setMyChoice}){
    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id);
      };
    
      return (
        <div className="play">
            <Link to="/game">
              <img
                src={paper}
                alt="paper"
                data-id="paper"
                onClick={setChoice}
                className="icon icon--paper"
               ></img>
            </Link>
            <Link to="/game">
              <img
                src={scissor}
                alt="scissors"
                data-id="scissors"
                onClick={setChoice}
                className="icon icon--scissors"
              ></img>
            </Link>
            <Link to="/game">
              <img
                src={rock}
                alt="rock"
                data-id="rock"
                onClick={setChoice}
                className="icon icon--rock"
              ></img
              >
            </Link>
          
        </div>
      );
};
export default Play;