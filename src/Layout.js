import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from './Context/StarWarsContext';

import Navbar from './View/Navbar';
import Characters from './View/Characters';
import Person from './View/Person';
import Planets from './View/Planets.jsx';
import Planet from './View/Planet';
import Vehicles from './View/Vehicles';
import Vehicle from './View/Vehicle';
import Home from './View/Home';
import NotFound from './View/NotFound'


function Layout() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="characters" element={<Characters />} />
      <Route path="planets" element={<Planets />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="characters/:id" element={<Person />} />
      <Route path="planets/:id" element={<Planet />} />
      <Route path="vehicles/:id" element={ <Vehicle />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );

}

export default injectContext(Layout);

