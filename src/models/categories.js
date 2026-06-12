'use strict';

import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  { collection: 'categories', timestamps: true }
);

export default mongoose.model('Category', categorySchema);
