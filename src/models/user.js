'use strict';

import mongoose from 'mongoose';
import hashPassword from '../helpers/passwordEncrypt.js';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      select: false,
      set: (password) => hashPassword(password),
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Email field must be required.'],
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        'Please fill a valid email address',
      ],
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'staff'],
        message: '{VALUE} is not a valid role.',
      },
      default: 'staff',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    refreshToken: {
      type: String,
      default: null,
      select: false,
    },
  },
  { collection: 'users', timestamps: true }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password") || this.isModified("role")) {
    this.refreshToken = null;
  }
  next();
});

export default mongoose.model('Users', userSchema);
