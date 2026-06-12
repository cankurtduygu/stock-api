import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required."],
    },

    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "Brand ID is required."],
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product ID is required."],
    },

    quantity: {
      type: Number,
      required: [true, "Quantity is required."],
      min: [1, "Quantity must be at least 1."],
    },

    price: {
      type: Number,
      required: [true, "Price is required."],
      min: [0, "Price cannot be negative."],
    },

    priceTotal: {
      type: Number,
      set: function () {
        return this.quantity * this.price;
      },
      default: function () {
        return this.quantity * this.price;
      },
      transform: function () {
        return this.quantity * this.price;
      },
    },
  },
  { 
    collection: 'sales',
    timestamps: true
  }
);

export default mongoose.model("Sale", saleSchema);