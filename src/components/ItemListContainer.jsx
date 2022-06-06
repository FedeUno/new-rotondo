import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';


export default function ItemListCotainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 1, title:'El Chavo', description:'El protagonista principal en la serie de su mismo nombre. Fue interpretado por Roberto Gómez Bolaños.', price:'precio-1', pictureUrl:'chavo.jpg'},
          { id: 2, title:'Doña Clotilde', description:'Más conocida con el apodo de "La Bruja del 71" (en referencia al número de su departamento), es un personaje interpretado por la actriz Angelines Fernández.', price:'precio-2', pictureUrl:'clotilde.jpg'},
          { id: 3, title:'Don Ramón', description:'Es un viudo desempleado que vive junto a su hija, la Chilindrina, en el departamento nro. 72 de la vecindad del Chavo, propiedad del señor Barriga. Fue personificado por el actor mexicano Ramón Valdés.', price:'precio-3', pictureUrl:'donRamon.jpg'},
          { id: 4, title:'Doña Florinda', description:'Personaje interpretado por la actriz mexicana Florinda Meza. Se trata de una mujer viuda, de un carácter soberbio, engreído, altanero, prepotente, siempre está de mal humor.', price:'precio-4', pictureUrl:'florinda.jpg'}, 
          { id: 5, title:'Quico', description:'Fue interpretado por Carlos Villagrán en la serie original. Es hijo único de Doña Florinda, quien lo idealiza y consiente, por lo que suele mostrar la personalidad caricaturizada de un niño consentido y pretencioso.', price:'precio-5', pictureUrl:'Quico.jpg'},
        ]);
      }, 2000);
    });

    promesa
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return(
  <>
    <div className='loading'> {loading && 'Loading...'} </div>
    <div> {error && 'Load error'} </div>      
    <ItemList items={resultado}/>
  </>
  )
}