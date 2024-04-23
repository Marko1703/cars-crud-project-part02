"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const cars_entity_1 = require("./entities/cars.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CarsService = class CarsService {
    constructor(carRepo) {
        this.carRepo = carRepo;
    }
    getAllCars(filters) {
        const filterConfig = {};
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
    async getCarById(id) {
        const foundCar = await this.carRepo.findOneBy({ id });
        if (!foundCar)
            throw new common_1.NotFoundException('Car not found');
        return foundCar;
    }
    createCar(carData) {
        return this.carRepo.save(carData);
    }
    async updateCar(carId, updateData) {
        const foundCars = await this.getCarById(carId);
        Object.assign(foundCars, updateData);
        await this.carRepo.save(foundCars);
    }
    async deleteCar(carId) {
        const foundCar = await this.getCarById(carId);
        await this.carRepo.remove(foundCar);
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cars_entity_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarsService);
//# sourceMappingURL=cars.service.js.map