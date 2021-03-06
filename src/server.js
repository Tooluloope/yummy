import express from "express";
import { json, urlencoded } from "body-parser";
import config from "./config";
import { connect } from "./utils/db";
import cors from "cors";
import { SignUp, SignIn } from "./utils/auth";

export const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.post("/signup", SignUp);
app.post("/signin", SignIn);


export const start = async () => {

  try {
    await connect();
    app.listen(config.PORT, () => {
      console.log(`Server running on http://localhost:${config.PORT}`);
    });
  } catch (e) {
    
    console.error(e);
  }
};
