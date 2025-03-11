const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const TeacherSchema = new Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  username: {
    type: String,
    default: null,
  },
  nickname: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    enum: ["F", "M"],
    default: null,
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
  status: {
    type: Boolean,
    default: false,
  },
  point: {
    type: int32,
    default: 0,
  },
  package: {
    type: int32,
    default: null,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now, // get the timestamp
  },
});

TeacherSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

module.exports = mongoose.model("Teacher", TeacherSchema);
