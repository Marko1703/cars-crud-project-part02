import { 
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Res,
} from '@nestjs/common';
import { CarsService } from "./cars.service";
import { CreateCarsDto } from "./dtos/create-cars.dto";
import { UpdateCarsDto } from "./dtos/update-cars.dto";
import { Response } from "express";
import { CarFilter } from './interfaces/cars.interface';


@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}

    @Get()
    getAllCars(
      @Query("make") make: string,
      @Query("model") model: string,
      @Query("year") year: number,
    ) {
      const filters: CarFilter = {
        make,
        model,
        year
      };

      return this.carsService.getAllCars(filters);
    }
  
    @Get(":id")
    getCarById(@Param("id") carId: string) {
      return this.carsService.getCarById(carId);
    }
  
    @Post()
    createCar(@Body() body: CreateCarsDto) {
      return this.carsService.createCar(body);
    }
  
    @Patch(":id")
    updateCar(
      @Param("id") carId: string,
      @Body() updateData: UpdateCarsDto
    ) {
      return this.carsService.updateCar(carId, updateData);
    }
  
    @Delete(":id")
    async deleteCar(@Res() res: Response, @Param("id") carId: string) {
      await this.carsService.deleteCar(carId);
  
      res.sendStatus(204);
    }
}
