import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>

      <h1> The Neighborhood </h1>
      <div className='ItemListContainer'>
        <ItemListContainer />
      </div>   

    </>
  );
}

