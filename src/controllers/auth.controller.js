'use strict';

import User from '../models/user.js';
import hashPassword from '../helpers/passwordEncrypt.js';
import jwt from 'jsonwebtoken';
import customError from '../helpers/customError.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../helpers/generateJwt.js';


const authController = {
  register: async (req, res) => {
    const user = await User.create(req.body);

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      error: false,
      message: 'User registered successfully.',
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      bearer: {
        access: accessToken,
        refresh: refreshToken,
      },
    });
  },

  login: async (req, res) => {
    const { username, email, password } = req.body;

    if (!((username || email) && password)) {
      throw new CustomError('username/email or password is wrong.', 401);
    }

    const user = await User.findOne({ $or: [{ username }, { email }] }).select(
      '+password'
    );

    if (!user || user.password !== hashPassword(password)) {
      throw new CustomError('username/email or password is wrong.', 401);
    }

    if (!user?.isActive) {
      throw new CustomError('This account is not active.', 401);
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.send({
      error: false,
      bearer: {
        access: accessToken,
        refresh: refreshToken,
      },
    });
  },

  logout: async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { refreshToken: null });

  res.send({
    error: false,
    message: "Logged out successfully.",
  });
},
};

export default authController;
