import {database} from "../Mongo";

const CarSchema = new database.Schema({
    uuid: {type: String, required: true},
    brand: {type: String, required: true}, 
    year: {type: Number, required: true},
    model : {type: String, required: true},
    version: {type: String, required: true},
    kilometers : {type: Number, required: true},
    transmissionType: {type: String, required: true}, 
    sellingPrice : {type: Number, required: true},
},
{
    timestamps: true
});
export const CarModel = database.model('cars', CarSchema);
