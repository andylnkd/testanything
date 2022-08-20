import React from 'react'
import data from './data.js'
import Card from './components/Card.js'
import NavBar from './components/NavBar.js'
import MainBody from './MainBody'


function App() { 
  
  
  return (
   <>
     <NavBar icon="https://www.freepnglogos.com/uploads/globe-png/blue-globe-transparent-sporetesting-39.png"
      title="my travel journal" />
    <MainBody params={data} />
   </>
  );

}

export default App;
