import mongoose from "mongoose";
import config from "./config";

mongoose
  .connect(config.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log(`Database is connect`))
  .catch((err) => console.log(err));
