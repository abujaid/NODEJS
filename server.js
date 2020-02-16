const express = require("express");
const app = express();
const connectDB = require("./config/db");
// const UserRouter = require("./routes/api/user");
// const PostRouter = require("./routes/api/post");
const BookRouter = require("./routes/api/api");

// Connect Database
connectDB();

app.use(express.json());

// Routes
// app.use(UserRouter);
// app.use(PostRouter);
app.use("/api/books", BookRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => `Server is running on ${port}`);
