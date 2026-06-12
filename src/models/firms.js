'use strict';

import mongoose from 'mongoose';

const firmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
        type: String,
        trim: true,
    }
  },
  { collection: 'firms', timestamps: true }
);

export default mongoose.model('Firm', firmSchema);
