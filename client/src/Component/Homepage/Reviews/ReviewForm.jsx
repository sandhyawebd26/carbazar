import React from "react";
import "./ReviewForm.css";
import axios from 'axios';

function ReviewForm(){
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      title: e.target.title.value,
      content: e.target.content.value,
      rating: e.target.rating.value,
    };
    try {
      await axios.post('/api/reviews', reviewData);
      // Optionally, update the review list by fetching the latest reviews from the backend
    } catch (error) {
      // Handle error
    }
  };

    return (
    <>
      <div className="reviewBox">
        <h2 className="heading">User Review</h2>
        <form className="reviewForm">
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            placeholder="Write something here!"
          ></textarea>
          <button className="subButton btn btn-success" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default ReviewForm;



