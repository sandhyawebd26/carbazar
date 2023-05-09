import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Homepage.css";
import pic from "../../Assets/pic.webp";
import rating from "../../Assets/rating.webp";
import pic1 from "../../Assets/Lamborghini.webp";
import pic2 from "../../Assets/audi.webp";
import pic3 from "../../Assets/BMW.webp";
import { useNavigate } from "react-router-dom";

function Home() {
  const cards = [
    {
      id: 1,
      title: "Mercedes-Benz C-Class",
      price: "Rs. 60 - 66 Lakh",
      imageUrl: pic,
      reviews: "20 reviews",
      description:
        "The Mercedes-Benz C-Class is a compact executive car that was first introduced in 1993. It is the most popular model of the Mercedes-Benz brand, known for its luxury features, sleek design, and excellent performance. The C-Class is available in both sedan and coupe body styles and is equipped with a range of powerful engines, ranging from four-cylinder to V8.",
      message: "Don't miss out on the best offers for this month",
    },
    {
      id: 2,
      title: "BMW 3 Series",
      price: "Rs. 55 - 62 Lakh",
      imageUrl: pic1,
      reviews: "15 reviews",
      description:
        "The BMW 3 Series is a compact executive car that offers a perfect blend of luxury, performance, and style. With its powerful engines, advanced technology, and elegant design, the 3 Series is a top choice for those seeking a premium driving experience.",
      message: "Get the best deals on the BMW 3 Series today!",
    },
    {
      id: 3,
      title: "Audi A4",
      price: "Rs. 50 - 55 Lakh",
      imageUrl: pic2,
      reviews: "18 reviews",
      description:
        "The Audi A4 is a luxury sedan that combines cutting-edge technology, refined comfort, and exhilarating performance. With its sleek design and advanced features, the A4 is a symbol of elegance and sophistication.",
      message: "Experience the ultimate driving pleasure with the Audi A4!",
    },
    {
      id: 4,
      title: "Lamborghini Huracan",
      price: "Rs. 3.5 - 4 Crore",
      imageUrl: pic3,
      reviews: "10 reviews",
      description:
        "The Lamborghini Huracan is a supercar that represents the pinnacle of automotive engineering and performance. With its aggressive styling, roaring engine, and lightning-fast acceleration, the Huracan delivers an unmatched driving experience.",
      message: "Unleash your inner speed demon with the Lamborghini Huracan!",
    },
    // Add more card objects here
  ];
  const navigate = useNavigate(); // useNavigate hook

  const handleClick = () => {
    navigate("/CarDetails"); // navigate to the "/car-details" route
  };

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
                <button className="btn btn-primary" onClick={handleClick}>Read More</button>
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
