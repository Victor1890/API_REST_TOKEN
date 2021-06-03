import dotenv from "dotenv";
dotenv.config();

export default {
  SECRET_TOKEN: process.env.SECRET_TOKEN || "key_secret",
  DB_CONNECTION: process.env.DB_CONNECTION || "mongodb://localhost/dbToken",
};
