require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const fileUpload = require('express-fileupload');
// const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
// app.use(cookieParser());
app.use(cors());
// app.use(fileUpload({
//     useTempFiles: true
// }));

// Routes
// app.use('/user', require('./routes/userRouter'));
// app.use('/api',require('./routes/categoryRouter'));
// app.use('/api',require('./routes/upload'));
// app.use('/api',require('./routes/productRouter'));

// Connect to mongodb
const URI = process.env.MONGODB_URL;
console.log("URI", URI);
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to MongoDB");
  }
);

// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to DD World" });
// });

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
