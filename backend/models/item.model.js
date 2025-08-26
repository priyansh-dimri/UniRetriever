const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, enum: ["Lost", "Found"], required: true },
    location: { type: String, required: true },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
