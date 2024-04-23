import { CarsService } from "./cars.service";
import { CreateCarsDto } from "./dtos/create-cars.dto";
import { UpdateCarsDto } from "./dtos/update-cars.dto";
import { Response } from "express";
export declare class CarsController {
    private carsService;
    constructor(carsService: CarsService);
    getAllCars(make: string, model: string, year: number): Promise<import("./entities/cars.entity").Car[]>;
    getCarById(carId: string): Promise<import("./entities/cars.entity").Car>;
    createCar(body: CreateCarsDto): Promise<CreateCarsDto & import("./entities/cars.entity").Car>;
    updateCar(carId: string, updateData: UpdateCarsDto): Promise<void>;
    deleteCar(res: Response, carId: string): Promise<void>;
}
