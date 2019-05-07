import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "./app/App";

const app = express();

app.get("/*", (req, res) => {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("./src/template.html");
  fs.readFile(indexFile, "utf8", (_, data) =>
    res.send(
      data.replace(`<div id="app"></div>`, `<div id="app">${markup}</div>`)
    )
  );
});

app.listen(1599, () => {
  console.log("Server listening on port 1599");
});
