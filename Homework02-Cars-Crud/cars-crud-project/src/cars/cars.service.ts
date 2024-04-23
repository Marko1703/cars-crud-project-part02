import { Injectable, NotFoundException } from '@nestjs/common';
import { CarFilter } from "./interfaces/cars.interface";
import { CreateCarsDto } from "./dtos/create-cars.dto";
import { UpdateCarsDto } from "./dtos/update-cars.dto";
import { Car } from './entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private carRepo: Repository<Car>,
  ) {}

  getAllCars(filters: CarFilter) {
    const filterConfig: FindManyOptions<Car> = {};

    console.log(filters);

    if (filters.make) {
      filterConfig.where = { make: filters.make };
    }

    if (filters.model) {
      filterConfig.where = { model: filters.model };
    }

    if (filters.year) {
      filterConfig.where = { year: filters.year };
    }

    console.log(filterConfig);

    return this.carRepo.find(filterConfig);
  }

  async getCarById(id: string) {
    const foundCar = await this.carRepo.findOneBy({ id });

    if (!foundCar) throw new NotFoundException('Car not found');

    return foundCar;
  }

  createCar(carData: CreateCarsDto) {
    return this.carRepo.save(carData);
  }

  async updateCar(carId: string, updateData: UpdateCarsDto) {
    const foundCars = await this.getCarById(carId);

    Object.assign(foundCars, updateData);

    // const updatedProduct = {...foundProduct, updateData}

    //This will update the product instead of creating a new one becasue we sent a full entity object with id
    await this.carRepo.save(foundCars);
  }

  async deleteCar(carId: string) {
    const foundCar = await this.getCarById(carId);

    await this.carRepo.remove(foundCar);
  }
}
