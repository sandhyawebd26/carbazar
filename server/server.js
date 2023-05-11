const dotenv = require("dotenv");
const multer = require("../server/middleware/multerMidleware");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const auth = require("./routes/auth");
const http = require("http");
const cors = require("cors");
const productRoute = require("./routes/productRoutes");
const app = express();
const Dburl = "mongodb+srv://sandhyaginare:EfL4zox2hmL1XWmz@cluster0.bl27dmh.mongodb.net/CarSale?retryWrites=true&w=majority"
const server = http.createServer(app);

dotenv.config({ path: "./config.env" });
console.log("Database connected successfully", process.env.DB_CONNECTION);

mongoose.connect(Dburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(
  "",
  express.static("")
);
app.use(express.urlencoded({ limit: '20mb', extended: true }));
connectDataBase();



const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error: "));
db.once("open", function () {
  console.log("Database connected successfully");
});

app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api", productRoute);

server.listen(5000, () => {
  console.log(`Port is running at 5000`);
});
