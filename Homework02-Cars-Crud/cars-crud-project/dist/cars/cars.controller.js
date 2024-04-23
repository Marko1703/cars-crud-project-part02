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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const create_cars_dto_1 = require("./dtos/create-cars.dto");
const update_cars_dto_1 = require("./dtos/update-cars.dto");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    getAllCars(make, model, year) {
        const filters = {
            make,
            model,
            year
        };
        return this.carsService.getAllCars(filters);
    }
    getCarById(carId) {
        return this.carsService.getCarById(carId);
    }
    createCar(body) {
        return this.carsService.createCar(body);
    }
    updateCar(carId, updateData) {
        return this.carsService.updateCar(carId, updateData);
    }
    async deleteCar(res, carId) {
        await this.carsService.deleteCar(carId);
        res.sendStatus(204);
    }
};
exports.CarsController = CarsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("make")),
    __param(1, (0, common_1.Query)("model")),
    __param(2, (0, common_1.Query)("year")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getAllCars", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getCarById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cars_dto_1.CreateCarsDto]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "createCar", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cars_dto_1.UpdateCarsDto]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "updateCar", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "deleteCar", null);
exports.CarsController = CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
//# sourceMappingURL=cars.controller.js.map