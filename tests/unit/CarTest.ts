import Car from "../../src/entities/CarEntity";

test("car", () => {
    let car = new Car("Mercedez", 2020, "Hatch", "1.0 flex", 0, "CVT", 50000);
    
    expect(car.brand).toStrictEqual("Mercedez");
    expect(car.year).toStrictEqual(2020);
    expect(car.model).toStrictEqual("Hatch");
    expect(car.version).toStrictEqual("1.0 flex");
    expect(car.kilometers).toStrictEqual(0);
    expect(car.transmissionType).toStrictEqual("CVT");
    expect(car.sellingPrice).toStrictEqual(50000);

});