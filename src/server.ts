import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import routes from "./routes";
import {config} from "./config"
import {startDB} from "./database/Mongo"
import { Context } from "vm";

startDB();

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(
    cors({
        origin: "*"
    })
);
app.use(logger());

app.use(routes.routes()).use(routes.allowedMethods());

const server = app.listen(PORT, ()=>{
    console.log("Server listening on port: ",PORT);
}).on("error", err => {
     console.error(err);
});

export default server;
