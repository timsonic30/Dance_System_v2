const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Member = require("../models/member");

mongoose
  .connect(
    "mongodb+srv://wazine6513:Ab123456@erb.3et5k.mongodb.net/?retryWrites=true&w=majority&appName=ERB"
  )
  .then(() =>
    console.log("Pinged your deployment. You successfully connected to MongoDB")
  )
  .catch((err) => console.error("MongoDB connection error:", err));

router.get("/", (req, res, next) => {
  //   console.log("I am here");
  res.send({ message: "Backend send back the data to you" });
});

router.post("/register", async (req, res, next) => {
  const { phone, email, password } = req.body;

  const errors = [];

  // Check if the phone number is already in used. If true, return the error to the frontend
  try {
    const existingPhone = await Member.findOne({ phone });
    console.log(existingPhone);
    if (existingPhone) {
      // return res.status(409).json({ error: "此用戶名已使用，請使用另一名稱" });
      errors.push("Duplicated username. Please choose a different username");
      res.send({ message: "Duplicated phone" });
    }
  } catch (err) {
    console.error("Error while checking phone:", err.message);
  }

  // Check if the email address is already in used. If true, return the error to the frontend
  try {
    const existingEmail = await Member.findOne({ email });
    console.log(existingEmail);
    if (existingEmail) {
      // return res.status(409).json({ error: "Email is already in use" });
      errors.push("Duplicated email. Please provide a different email address");
      res.send({ message: "Duplicated email" });
    }
  } catch (err) {
    console.error("Error while checking email:", err.message);
  }
  if (errors.length === 0) {
    const NewMember = new Member({
      phone,
      email,
      password,
    });

    try {
      await NewMember.save();
      console.log("succeed to register new member!");
    } catch (err) {
      console.log(err.message);
    }
  }

  res.send({ message: "Registration is completed" });
});

app.get("/login", (req, res, next) => {
  //   console.log("I am here");

  res.send({ message: "Backend send back the data to you" });
});

module.exports = router;
