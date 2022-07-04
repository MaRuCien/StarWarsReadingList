import React, { useContext, useEffect } from 'react'
import { StarWarsContext } from '../Context/StarWarsContext';
import { Outlet, Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import starwars from '../Imagen/star.png'

function Navbar() {

  const { store, actions } = useContext(StarWarsContext);

  useEffect(() => {
  }, [])

  return (

    <nav className='navbar navbar-expand-lg sticky-top navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to="/" className='btn btn-primary btn-dark btn-outline-dark bg-black'>
          <img src={starwars} className='w-25' alt='logo' />
        </Link>
        <button className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/characters" className='nav-button active btn btn-primary me-3 text-dark border-warning bg-warning'>Characters</Link>
            </li>
            <li className='nav-item'>
              <Link to="/planets" className='nav-button btn btn-primary me-3 text-dark border-warning bg-warning'>Planets</Link>
            </li>
            <li className="nav-item ">
              <Link to="/vehicles" className='nav-button btn btn-primary me-3 text-dark border-warning bg-warning'>Vehicles</Link>
            </li>
            <li className='nav-item dropdown text-light'>
              <a className='nav-link text-light dropdown-toggle'
                href='/'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                Favourites
              </a>
              <ul className='dropdown-menu ' aria-labelledby='navbarDropdownMenuLink'>
                {store.favourites.map((item, index) =>
                (<li key={index} className='mx-2  mb-3'>{item.name}
                  <button className='btn btn-sm mx-2 btn-outline-warning'
                    onClick={() => actions.filterFavourites(item)}>
                    <AiFillDelete />
                  </button>
                </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>

  );
}

export default Navbar;

