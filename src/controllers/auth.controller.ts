import User, { IUser } from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

export const signup = async (req: Request, res: Response) => {
  //get data
  const { username, email, password } = req.body;

  //data definition
  const user: IUser = new User({
    username,
    email,
    password,
  });

  user.password = await user.encryPassword(user.password);

  const userSaved = await user.save();

  //token
  const token: string = jwt.sign({ _id: user._id }, config.SECRET_TOKEN, {
    expiresIn: 60 * 60 * 24,
  });
  res.header("auth-token", token).json({ userSaved, token });
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Email or password is wrong" });

  const correctPassword = await user.validatePassword(password);

  if (!correctPassword)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ _id: user._id }, config.SECRET_TOKEN, {
    expiresIn: 60 * 60 * 24,
  });

  return res.header("auth-token", token).json({ user, token });
};

export const profile = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId);

  if (!user) return res.status(404).json({ message: "No User found" });

  const { username, email } = user;

  return res
    .status(200)
    .json({ username, email, token: req.header("auth-token") });
};
