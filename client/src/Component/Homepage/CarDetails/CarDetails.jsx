import React from "react";
import "./CarDetails.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import car from "../../../Assets/car.webp";
import { useParams } from "react-router-dom";
import cards from "../cardJson";
import { Link } from "react-router-dom";
import ReviewForm from "../Reviews/ReviewForm";
import rating from "../../../Assets/rating.webp";

function CarDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
      <Link to={`/${cards.id}`} style={{ textDecoration: "none" }}>
        <div className="container">
          <div className="title">
            <h3 className="carTitle">{cards[id - 1].title}</h3>
            <div className="details">
              <img className="star" src={rating} alt="" />
              <p>{cards[id - 1].reviews}</p>
              <h5 className="price">{cards[id - 1].price}</h5>
            </div>
            <img src={cards[id - 1].imageUrl} alt="" />
            <p>{cards[id - 1].description}</p>
          </div>
        </div>
      </Link>
      <ReviewForm />
      <Footer />
    </>
  );
}

export default CarDetails;
