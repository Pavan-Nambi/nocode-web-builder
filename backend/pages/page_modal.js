const mongoose = require("mongoose");
const { Schema } = mongoose;

const Pages = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    slug: {
      type: String,
      required: true,
    },
    content: Object,
  },
  { timestamp: true }
);

module.exports = mongoose.model("Pages", Pages);
