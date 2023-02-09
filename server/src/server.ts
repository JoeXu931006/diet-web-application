import express from "express";
import { configureServer } from "./graphql";

const app = express();
configureServer(app);

app.listen(4000, () => {
  console.log("Running a GraphQl API on http://localhost:4000/graphql");
});
