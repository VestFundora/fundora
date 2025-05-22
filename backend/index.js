const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/aadhaar", authRoute);
app.use("/api/pan", authRoute)
app.use("/api/Company", authRoute)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
