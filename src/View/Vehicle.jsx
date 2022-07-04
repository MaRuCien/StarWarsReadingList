import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StarWarsContext } from '../Context/StarWarsContext';


function Vehicle() {

	const { id } = useParams();
	const { store, actions } = useContext(StarWarsContext);

	useEffect(() => {
		console.log(id);
		actions.getVehicle(`https://swapi.dev/api/vehicles/${id}`)
	}, [])

	return (
		
			<div className='container-sm mt-5 bg-dark'>
				<div className='row mb-4 justify-content-center bg-dark'>
					<div className='card col-md-10 bg-dark border-warning'>
						<h1 className='col text-warning bg-dark mt-3'><strong>{!!store.vehicle && store.vehicle.name}</strong></h1>
						<h5 className='mt-3 mb-3 text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
						<ul className='text-light'>
							<li>Crew : {!!store.vehicle && store.vehicle.crew}</li>
							<li>Passengers : {!!store.vehicle && store.vehicle.passengers}</li>
							<li>Vehicle Class : {!!store.vehicle && store.vehicle.vehicle_class}</li>
							<li>Length : {!!store.vehicle && store.vehicle.length}</li>
						</ul>
					</div>
				</div>
			</div>
		
	);
};

export default Vehicle;