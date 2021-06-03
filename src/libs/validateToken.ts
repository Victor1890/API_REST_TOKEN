import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

export interface IPayload {
  _id: string;
  ait: number;
  exp: number;
}

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  const payload = jwt.verify(token, config.SECRET_TOKEN) as IPayload;

  req.userId = payload._id;

  next();
};
