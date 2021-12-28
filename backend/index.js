const express = require("express");
const mogoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);

mogoose.connect(process.env.DATABASE_URI).then(() => {
  console.log("Database connected");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
