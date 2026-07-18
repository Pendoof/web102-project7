import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { supabase } from "../client";

const DetailView = () => {
	const { id } = useParams();
	const [crewmate, setCrewmate] = useState({ name: "", speed: 0, color: "" });

	useEffect(() => {
		const getCrewmate = async () => {
			const { data, error } = await supabase
				.from("Crewmates")
				.select("*")
				.eq("id", id)
				.single();

			if (error) {
				console.error("Error fetching crewmate:", error);
				return;
			}

			setCrewmate({
				name: data.name,
				speed: data.speed,
				color: data.color,
			});
		};

		getCrewmate();
	}, [id]);

	return (
		<div className="detailView">
			<h1>Crewmate: {crewmate.name}</h1>
			<h1>Stats: </h1>
			<h3>Color: {crewmate.color}</h3>
			<h3>Speed: {crewmate.speed} mph</h3>
			<h2>
				{crewmate.speed < 5
					? "This crewmate is pretty slow"
					: crewmate.speed < 15
						? "This crewmate has average speed"
						: crewmate.speed < 25
							? "This crewmate is fast!"
							: "This crewmate is insanely fast!"}
			</h2>
			<Link to={"/edit/" + id}>
				<input className="submit" type="submit" value="Edit" />
			</Link>
		</div>
	);
};

export default DetailView;
