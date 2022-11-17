"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const global_routes_1 = __importDefault(require("./routes/global-routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
app.use(express_1.default.json({ limit: "5000KB" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api", global_routes_1.default);
app.listen(PORT, () => {
    console.log(PORT);
});
