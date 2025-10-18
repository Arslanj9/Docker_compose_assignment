console.log("🧠 Server starting...");

const express = require("express");
const cors = require("cors");

console.log("✅ Modules loaded");

const app = express();
app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Backend API 🚀" });
});

app.listen(5000, () => {
  console.log("✅ Backend running on port 5000");
});
