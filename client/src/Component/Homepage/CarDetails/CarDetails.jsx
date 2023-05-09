import React from "react";
import car from "../../../Assets/car.webp";
import { useParams } from "react-router-dom";

function CarDetails(props) {
  const { id, title } = useParams();
  return ( 
    <>
      <div className="container">
        <img src={car} alt="" />
        <div className="title">
          <h3>{props.title}</h3>
          <p>
           {props.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default CarDetails;
