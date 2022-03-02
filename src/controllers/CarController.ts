import { Context } from "koa";
import Car from "../entities/CarEntity";
import { CarModel } from "../database/models/CarModel";
import { checkIfValidUUID } from "../validators/UUIDV4Validator";
import { nextTick } from "process";
export default class CarController {

    public static async getAllCars(ctx: Context) {
        let query = await CarModel.find();
        ctx.body = {
            status: "success",
            data: query
        }
        ctx.status = 200;
    }

    public static async getCar(ctx: Context) {
        try {
            const uuid = ctx.params.uuid;
            if (checkIfValidUUID(uuid)) {
                let query = await CarModel.find({ "uuid": uuid });
                ctx.body = {
                    status: "success",
                    data: query
                }
                ctx.status = 200;
            } else {
                ctx.body = {
                    status: "success",
                    data: "Invalid uuid."
                }
                ctx.status = 404;
            }
        } catch (e) {
            console.error(e);
        }
    }

    public static async createCar(ctx: Context) {
        try{
            let carInput = new Car(ctx.request.body.brand, ctx.request.body.year, ctx.request.body.model, ctx.request.body.version, ctx.request.body.kilometers, ctx.request.body.transmissionType, ctx.request.body.sellingPrice);
            let CarDocument = new CarModel(carInput);
            let validationError = await CarDocument.validateSync();
            if (validationError) {
                ctx.body = {
                    status: "success",
                    data: validationError
                }
                ctx.status = 400;
            } else {
                let query = await CarDocument.save();
                ctx.body = {
                    status: "success",
                    data: query
                }
                ctx.status = 201;
            }
        }catch(e){
            console.error(e);
        }
    }

    public static async deleteCar(ctx: Context) {
        try {
            const uuid = ctx.params.uuid
            if (checkIfValidUUID(uuid)) {
                let query = await CarModel.deleteOne({ "uuid": uuid });
                ctx.body = {
                    status: "success",
                    data: query
                }
                ctx.status = 200;
            } else {
                ctx.body = {
                    status: "success",
                    data: "Invalid uuid."
                }
                ctx.status = 400;
            }
        } catch (e) {
            console.error(e);
        }
    }

    public static async updateCar(ctx: Context) {
        try {
            const uuid = ctx.params.uuid
            if (checkIfValidUUID(uuid)) {
                let query = await CarModel.updateOne({"uuid": uuid}, ctx.request.body)
                ctx.body = {
                    status: "success",
                    data: query
                }
                ctx.status = 200;
            } else {
                ctx.body = {
                    status: "success",
                    data: "Invalid uuid."
                }
                ctx.status = 400;
            }
        } catch (e) {
            console.error(e);
        }
    }

    public static async searchCars(ctx: Context) {
        try {
            let query = await CarModel.find(ctx.request.body)
            ctx.body = {
                status: "success",
                data: query
            }
            ctx.status = 200;
        } catch (e) {
            console.error(e);
        }
    }
}