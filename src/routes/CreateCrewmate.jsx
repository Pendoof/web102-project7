import { useState } from "react";
import { supabase } from "../client";

const CreateCrewmate = () => {
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

	const createCrewmate = async (event) => {
		event.preventDefault();
		await supabase
			.from("Crewmates")
			.insert({
				name : crewmate.name,
				speed : crewmate.speed,
				color : crewmate.color
			})
			.select();
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

	return (
		<div className="create-crewmate">
			<h1 className="title">Create a New Crewmate</h1>
			<form className="create-form" onSubmit={createCrewmate}>
				<div className="inputs">
					<div className="input-container">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							onChange={handleChange}
						/>
					</div>
					<div className="input-container">
						<label htmlFor="speed">Speed (mph)</label>
						<input
							type="number"
							id="speed"
							name="speed"
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
			</form>
		</div>
	);
};

export default CreateCrewmate;
