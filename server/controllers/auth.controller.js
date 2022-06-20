import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.model.js';
import { createError } from '../ultils/error.js';

export const register = async(req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt)
    
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    await newUser.save();

    res.status(201).send('User has been created');
  } catch (err) {
    next(err);
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if(!user) return next(createError(404, "user not found"));

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordCorrect) return next(createError(400, 'Wrong username or password'));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );

    const { password, isAdmin, ...userDetails} = user._doc

    res.cookie("access_token", token, { httpOnly: true }).status(201).json({...userDetails});
  } catch (err) {
    next(err);
  }
};