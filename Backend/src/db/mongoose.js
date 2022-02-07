const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://arush:12345@cluster0.ppikj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
