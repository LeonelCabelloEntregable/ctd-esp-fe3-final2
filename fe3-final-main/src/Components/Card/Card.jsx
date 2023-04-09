import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
import { useGlobalContext } from "../utils/global.context";
import doctor from '../Imagenes/doctor.png'


const Card = ({dentist} ) => {
  const{addFavorite, isInFavorites, deleteFromFavorites, isDark} = useGlobalContext()
  const darkTheme= isDark()
  return (
    <div className= {darkTheme ?  "card-dark card" : "card"}  >
      <h2>{dentist.name}</h2>
             <img 
             src={doctor}
             alt="Doctor"
             width="70%"
             />
             <a className={'link'} href={dentist.website}>{dentist.website}</a>
             <p>Ciudad: {dentist.address.city}</p>
             <Link className={'link'} to={"/detail/" + dentist.id}>
              Ver Mas
             </Link>
             {
             isInFavorites(dentist.id)
             ?
             <button className="delete" onClick={() => deleteFromFavorites(dentist.id)}>Delete</button>
             :
             <button  className="addfavorite" onClick={()=> addFavorite(dentist)}>Add Favorite</button>
             }

    </div>
  );
};

export default Card;
