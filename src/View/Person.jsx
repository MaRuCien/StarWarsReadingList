import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StarWarsContext } from '../Context/StarWarsContext';



function Person() {

	const { id } = useParams();
	const { store, actions } = useContext(StarWarsContext);

	useEffect(() => {
		console.log(id);
		actions.getPerson(`https://swapi.dev/api/people/${id}`)
	}, [])

	return (
		
			<div className='container-sm mt-5 bg-dark'>
				<div className='row mb-4 justify-content-center bg-dark'>
					<div className='card col-md-10 bg-dark border-warning'>
						<h1 className='col text-warning bg-dark mt-3'><strong>{!!store.person && store.person.name}</strong></h1>
						<h5 className='mt-3 mb-3 text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
						<ul className='text-light'>
							<li>Name : {!!store.person && store.person.name}</li>
							<li>Birth Year : {!!store.person && store.person.birth_year}</li>
							<li>Sex : {!!store.person && store.person.gender}</li>
							<li>Height : {!!store.person && store.person.height}</li>
							<li>Skin Color : {!!store.person && store.person.skin_color}</li>
							<li>Eye Color : {!!store.person && store.person.eye_color}</li>
						</ul>
					</div>
				</div>
			</div>
	);
};

export default Person;