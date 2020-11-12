// Pertemuan 21

import React from "react";

const Card = ({name, institution, address, phoneNumber}) =>{
    return (
        <div className="Card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
          
        </div>
    )
};
 

export default Card;