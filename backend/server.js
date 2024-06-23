const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = require("./index");

const DB = process.env.DATABASE_URL.replace("<PASSWORD>", process.env.PASSWORD);

mongoose.connect(DB).then((con) => {
  console.log("Connections done ...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
