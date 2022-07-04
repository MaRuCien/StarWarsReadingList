import React from 'react'
import logostarwars from '../Imagen/Star_Wars_Logo.svg.png'

function Home() {
  
  return (
    
      <div className='container-sm mt-5'>
        <img src={logostarwars} className='w-25 p-3' alt='logo' /> 
        <h2 className='text-warning mt-5'>Hace mucho tiempo en una galaxia muy muy lejana ...</h2>
      </div>
    
  );
}

export default Home;
