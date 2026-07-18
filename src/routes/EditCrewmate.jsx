import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";

const EditCrewmate = ({ data }) => {
	const { id } = useParams();
	const [crewmate, setCrewmate] = useState({ name: "", speed: 0, color: "" });
	const colors = [
		"Red",
		"Orange",
		"Yellow",
		"Blue",
		"Green",
		"Purple",
		"Pink",
		"Rainbow",
	];

	const editCrewmate = async (event) => {
		event.preventDefault();
		await supabase
			.from("Crewmates")
			.update({
				name: crewmate.name,
				speed: crewmate.speed,
				color: crewmate.color,
			})
			.eq("id", id);
		window.location = "/gallery";
	};

	const deleteCrewmate = async (event) => {
		event.preventDefault();
		await supabase.from("Crewmates").delete().eq("id", id);
		window.location = "/gallery";
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCrewmate((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
    };
    
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
		<div className="create-crewmate">
			<h1 className="title">Update Your Crewmate :)</h1>
			<form className="create-form" onSubmit={editCrewmate}>
				<div className="inputs">
					<div className="input-container">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={crewmate.name}
							onChange={handleChange}
						/>
					</div>
					<div className="input-container">
						<label htmlFor="speed">Speed (mph)</label>
						<input
							type="number"
							id="speed"
							name="speed"
							value={crewmate.speed}
							onChange={handleChange}
						/>
					</div>
					<div className="input-container">
                        <label htmlFor="color">Color</label>
						{colors.map((color) => (
							<label key={color}>
								<input
									type="radio"
									name="color"
									value={color}
									checked={crewmate.color === color}
									onChange={handleChange}
								/>
								{color}
							</label>
						))}
					</div>
				</div>
				<input className="submit" type="submit" value="Submit" />
				<button className="deleteButton" onClick={deleteCrewmate}>
					Delete
				</button>
			</form>
		</div>
	);
};

export default EditCrewmate;
