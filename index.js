import { express } from "express";
import { foodRouter } from "./routes/food.routes.js"

const app = express();

app.use(express.json());

app.use("/food", foodRouter);

app.listen(4000, () => {
    console.log("rodando ok");
});

