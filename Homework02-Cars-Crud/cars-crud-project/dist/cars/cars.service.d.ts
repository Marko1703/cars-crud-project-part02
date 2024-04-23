import { CarFilter } from "./interfaces/cars.interface";
import { CreateCarsDto } from "./dtos/create-cars.dto";
import { UpdateCarsDto } from "./dtos/update-cars.dto";
import { Car } from './entities/cars.entity';
import { Repository } from 'typeorm';
export declare class CarsService {
    private carRepo;
    constructor(carRepo: Repository<Car>);
    getAllCars(filters: CarFilter): Promise<Car[]>;
    getCarById(id: string): Promise<Car>;
    createCar(carData: CreateCarsDto): Promise<CreateCarsDto & Car>;
    updateCar(carId: string, updateData: UpdateCarsDto): Promise<void>;
    deleteCar(carId: string): Promise<void>;
}
