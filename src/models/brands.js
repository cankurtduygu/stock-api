'use strict';

import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    image: {
        type: String,
        trim: true,
    }
  },
  { collection: 'brands', timestamps: true }
);

export default mongoose.model('Brand', brandSchema);
