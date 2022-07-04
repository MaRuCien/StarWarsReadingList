import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../Context/StarWarsContext';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'


function Vehicles() {

  const { store, actions } = useContext(StarWarsContext);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  
  return (
    
      <div className='container mt-5'>
        <div className='row mb-4 bg-dark'>
          <hr />
          <h1>Vehicles</h1>
          <hr />
          {store.vehicles.map((vehicles, index) => (
            <div key={index} className='col-sm-3 text-light bg-dark mb-4'>
              <div className='card border-warning'>
                <div className='card-body bg-dark'>
                  <hr />
                  <h5 className='card-title text-warning mb-4'>{vehicles.name}</h5>
                  <hr />
                  <ul className='planets-list'>
                    <li>Model: {vehicles.model}</li>
                    <li>Cargo Capacity: {vehicles.cargo_capacity}</li>
                    <li>Vehicle Class: {vehicles.vehicle_class}</li>
                  </ul>
                  <Link to={"/vehicles/" + vehicles.url.match(/\d+/)[0]}className='btn btn-primary me-3 text-dark border-warning bg-warning'>
                    Learn more
                  </Link>
                  <button className='btn btn-secondary text-dark border-warning bg-warning'
                  onClick={() => actions.addFavourites(vehicles)}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default Vehicles;