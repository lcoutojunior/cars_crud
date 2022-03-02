import { Context } from "koa";

export default class HealthCheckController {

    public static async healthCheck(ctx: Context){
        try{
            ctx.body = {
                status: "success",
                data: "pong"
            }
        }catch(e){
            console.error(e);
        }
    }
}