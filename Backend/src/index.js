const express = require("express");
require("./db/mongoose");
const contactRoutes = require("./routes/contacts");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(contactRoutes);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
