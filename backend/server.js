const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load env variables
dotenv.config();

const app = express();

/* =======================
   Middleware
======================= */
app.use(cors());
app.use(express.json()); // body parser

/* =======================
   MongoDB Connection
======================= */
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error.message);
  });

/* =======================
   Routes
======================= */
app.get("/", (req, res) => {
  res.send("🚀 Server is running");
});

// Example route placeholders
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/projects", require("./routes/projectRoutes"));

/* =======================
   Error Handler (Optional)
======================= */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* =======================
   Server Start
======================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
