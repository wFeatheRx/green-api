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
exports.RegistersController = void 0;
const common_1 = require("@nestjs/common");
const register_1 = require("../viewmodel/register");
const registers_service_1 = require("./registers.service");
let RegistersController = class RegistersController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    findAll() {
        return this.registerService.findAll();
    }
    findOne(phone) {
        return this.registerService.findOne(phone);
    }
    replaceOne(register) {
        return this.registerService.replaceOne(register);
    }
    deleteOne(id) {
        return this.registerService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegistersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':phone'),
    __param(0, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_1.Register]),
    __metadata("design:returntype", void 0)
], RegistersController.prototype, "replaceOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistersController.prototype, "deleteOne", null);
RegistersController = __decorate([
    (0, common_1.Controller)('api/registers'),
    __metadata("design:paramtypes", [registers_service_1.RegistersService])
], RegistersController);
exports.RegistersController = RegistersController;
//# sourceMappingURL=registers.controller.js.map