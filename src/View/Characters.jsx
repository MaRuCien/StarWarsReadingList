import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../Context/StarWarsContext';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';



function Characters() {

  const { store, actions } = useContext(StarWarsContext);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    
      <div className='container mt-5'>
        <div className='row mb-4 bg-dark'>
          <hr />
          <h1>Characters</h1>
          <hr />
          {store.characters.map((character, index) => (
            <div key={index} className='col-sm-3 text-light bg-dark mb-4'>
              <div className='card border-warning'>
                <div className='card-body bg-dark'>
                  <hr />
                  <h5 className='card-title text-warning mb-4'>{character.name}</h5>
                  <hr />
                  <ul className='characters-list'>
                    <li>Gender: {character.gender}</li>
                    <li>Height: {character.height}</li>
                    <li>Birth year: {character.birth_year}</li>
                  </ul>
                  <Link to={"/characters/" + character.url.match(/\d+/)[0]} className='btn btn-primary me-3 text-dark border-warning bg-warning'>
                    Learn more
                  </Link>
                  <button className='btn btn-secondary text-dark border-warning bg-warning'
                    onClick={() => actions.addFavourites(character)}>
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

export default Characters;
