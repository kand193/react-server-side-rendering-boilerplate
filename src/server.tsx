import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";

import App from "./app/App";

import template from "./template";

const app = express();

app.get("/*", (req, res) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags();
  const title = "Node";

  return res.send(template(body, styles, title));
});

app.listen(1599, () => {
  console.log("Server listening on port 1599");
});
