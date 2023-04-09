import React from "react";
import Card from "../../Components/Card/Card";
import { useGlobalContext } from "../../Components/utils/global.context";
import './Favs.css'

const Favs = () => {
  const {global} = useGlobalContext()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {
          global.favorites.length >0
          ?
          global.favorites.map(favorite => 
            (<Card key={favorite.id} dentist={favorite}/>))
          :
          <h2>Aun no hay favoritos...</h2>
        }
      
      </div>
    </>
  );
};

export default Favs;
