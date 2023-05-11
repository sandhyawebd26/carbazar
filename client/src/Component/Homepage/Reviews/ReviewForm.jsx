import React, { useState } from "react";
import axios from "axios";
import "./ReviewForm.css";

function ReviewForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    rating: 0,
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  // formData.append("title",formData1?. title)
  const reviewData = {
    title: formData.get("title"),
    content: formData.get("content"),
    rating: formData.get("rating"),
  };
    try {
      const response = await axios.post("http://localhost:5000/api/api/reviews", reviewData);
      console.log(response);

      const formData = new FormData(e.currentTarget);
      const title = formData.get("title");
      const content = formData.get("content");
      const rating = formData.get("rating");
      // Optionally, update the review list by fetching the latest reviews from the backend

      // Clear the form fields
      setFormData({
        title: "",
        content: "",
        rating: 0,
      });
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="reviewBox">
      <h2 className="heading">User Review</h2>

      <form className="reviewForm">
        <input
          type="text"
          name="title" // Add name attribute
          placeholder="Title"
        />
        <textarea
          name="content" // Add name attribute
          rows="10"
          cols="50"
          placeholder="Write something here!"
        ></textarea>
        <input
          type="number"
          name="rating" // Add name attribute
          placeholder="Rating"
        />
        <button
          className="subButton btn btn-success"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
