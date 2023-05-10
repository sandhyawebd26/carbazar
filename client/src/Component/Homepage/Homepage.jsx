import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Homepage.css";
import rating from "../../Assets/rating.webp";
import cards from "./cardJson";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <>
      <Navbar title="CarBazaar" />
      {cards.map((card) => (
        <div
          className="card mb-3 mt-5"
          style={{ maxWidth: "100%" }}
          key={card.id}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={card.imageUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <div className="d-flex">
                  <img
                    src={rating}
                    className="rating"
                    style={{ width: "100px" }}
                    alt=""
                  />
                  <p>{card.reviews}</p>
                </div>
                <div>
                  <h5>{card.price}</h5>
                </div>
                <p className="card-text">{card.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{card.message}</small>
                </p>
                <button className="btn btn-primary" onClick={()=>navigate(`/CarDetails/${card.id}`)}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default Home;
