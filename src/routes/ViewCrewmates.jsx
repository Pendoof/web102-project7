import { useState, useEffect } from 'react'
import { supabase } from "../client";
import Card from '../components/Card.jsx'

const ViewCrewmates = (props) => {

    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
		async function getCrewmates() {
			const { data, error } = await supabase.from("Crewmates").select("*");

			if (error) {
				console.log(error);
			} else {
				setCrewmates(data);
			}
		}

		getCrewmates();
	}, []);
    
    return (
		<div className="ViewCrewmates">
			{crewmates && crewmates.length > 0 ? (
				[...crewmates]
					.sort((a, b) => b.id - a.id)
					.map((crewmate, index) => (
						<Card
							key={crewmate.id}
							id={crewmate.id}
							name={crewmate.name}
							speed={crewmate.speed}
							color={crewmate.color}
						/>
					))
			) : (
				<h2>{"No Crewmates Yet 😞"}</h2>
			)}
		</div>
	);
}

export default ViewCrewmates