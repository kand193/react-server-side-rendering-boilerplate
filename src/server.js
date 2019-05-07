import express from "express";
import { renderToString } from "react-dom/server";

const app = express();

app.listen(1599, () => {
  console.log("HELLO WORLD");
});
