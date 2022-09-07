import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer  />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
