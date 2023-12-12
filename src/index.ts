import express from "express";
import bodyParser from "body-parser";
import routerTodos from "./routes/todoRouter";

const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/v1/", routerTodos);

app.listen(3000, () => console.log("Server is running"));
