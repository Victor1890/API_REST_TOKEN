import app from "./app";
import "./config/database";

const PORT = app.get("PORT");

const init = async (): Promise<void> => {
  await app.listen(PORT);
  console.log(`Listen on port ${PORT}`);
};

init();
