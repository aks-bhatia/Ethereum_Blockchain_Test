import express from "express";
import globalRouter from "./routes/global-routes";
const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json({ limit: "500KB" }));
app.use(express.urlencoded({ extended: false }));
app.use("/api", globalRouter);
app.listen(PORT);
