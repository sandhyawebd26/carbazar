const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const auth = require("./routes/auth");
const http = require("http");
const cors = require("cors");
const app = express();

const server = http.createServer(app);

dotenv.config({ path: "./config.env" });

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error: "));
db.once("open", function () {
  console.log("Database connected successfully solved by pulkitgupta");
});

app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);

server.listen(5000, () => {
  console.log(`Port is running at 5000`);
});
