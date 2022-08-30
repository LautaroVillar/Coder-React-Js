import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {

  const saludo = "hola mundo"
 
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo={saludo}/>
    </div>
  );
}

export default App;
