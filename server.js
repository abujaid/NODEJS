const express = require("express");
const app = express();
const connectDB = require("./config/db");
const routes = require("./routes/api/routes");
// const UserRouter = require("./routes/api/routes");
// const BookRouter = require("./routes/api/routes");

// Connect Database
connectDB();

app.use(express.json());

// Routes
app.use("/api", routes);
// app.use("/api/users", UserRouter);
// app.use("/api/books", BookRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => `Server is running on ${port}`);
