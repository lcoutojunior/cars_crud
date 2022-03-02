import Vehicle from "./VehicleEntity"

export default class Car extends Vehicle {

    public model: string;
    public version: string;
    public kilometers: number;
    public transmissionType : string;
    public sellingPrice : number;

    constructor(brand: string, year: number, model : string, version: string, kilometers : number, transmissionType: string, sellingPrice : number){
        super(brand, year);
        this.model = model;
        this.version = version;
        this.kilometers = kilometers;
        this.transmissionType = transmissionType;
        this.sellingPrice = sellingPrice;
    }
}