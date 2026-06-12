import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    firmId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Firm",
      required: true,
    },

    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    priceTotal: {
      type: Number,
      set: function () { return this.quantity * this.price; },
      default: function () { return this.quantity * this.price; },
      transform: function () { return this.quantity * this.price; },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Purchase", purchaseSchema);
