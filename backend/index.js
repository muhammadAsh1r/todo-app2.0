require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use(cors());
app.use(express.json());

connectDb();

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
