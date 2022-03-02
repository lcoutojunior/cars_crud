import healthCheck from "./controllers/HealthcheckController";
import car from "./controllers/CarController";
import Router from "koa-router";
const router = new Router();

router.get('/healthcheck', healthCheck.healthCheck);
router.get('/cars/:uuid', car.getCar);
router.get('/cars', car.getAllCars);
router.post('/cars', car.createCar);
router.delete('/cars/:uuid', car.deleteCar);
router.put('/cars/:uuid', car.updateCar);
router.post('/cars/search', car.searchCars);

export default router;