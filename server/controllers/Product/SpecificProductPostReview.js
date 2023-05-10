const {Card} = require("../../models/cards");

const postReview = async (req, res) => {
  try {
    const { title, content, rating } = req.body;

    const review = await Card.create({
      title,
      content,
      rating
    });

    res.status(201).json({ success: true, Card });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).send("Failed to create review");
  }
};

module.exports = postReview;
