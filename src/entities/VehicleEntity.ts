import { v4 as uuidv4 } from "uuid";

export default class Vehicle {
    public uuid: string;
    public brand: string;
    public year: number;

    constructor(brand: string, year: number) {
        this.uuid = uuidv4();
        this.brand = brand;
        this.year = year;
    }
}