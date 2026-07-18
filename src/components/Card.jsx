import { useState } from "react";
import more from "./more.png";
import { Link } from "react-router";
import { supabase } from "../client";

const Card = (props) => {
  return (
		<div className="Card">
			<style>
				{`
					@keyframes rainbowGlow {
						0% {
							filter: drop-shadow(0 0 8px red);
						}
						25% {
							filter: drop-shadow(0 0 8px yellow);
						}
						50% {
							filter: drop-shadow(0 0 8px cyan);
						}
						75% {
							filter: drop-shadow(0 0 8px magenta);
						}
						100% {
							filter: drop-shadow(0 0 8px red);
						}
					}
				`}
			</style>
			<Link to={"/edit/" + props.id}>
				<img className="moreButton" alt="edit button" src={more} />
			</Link>
			<Link to={"/crewmate/" + props.id}>
				<img
					className="silhouette"
					src="https://img.icons8.com/androidL/512/FFFFFF/among-us.png"
					alt="silhouette"
					style={{
						animation:
							props.color === "Rainbow"
								? "rainbowGlow 3s infinite linear"
								: "none",
						filter:
							props.color !== "Rainbow"
								? `drop-shadow(0 0 10px ${props.color})`
								: "none",
					}}
				></img>
			</Link>
			<h2 className="name">Name of Crewmate: {props.name}</h2>
			<h3 className="speed">Speed of Crewmate: {props.speed}</h3>
			<p className="color">Color of Crewmate: {props.color}</p>
		</div>
  );
};

export default Card;
