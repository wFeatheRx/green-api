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
exports.RegistersService = void 0;
const common_1 = require("@nestjs/common");
const nest_mongodb_driver_1 = require("nest-mongodb-driver");
const mongodb_1 = require("mongodb");
let RegistersService = class RegistersService {
    constructor(db) {
        this.db = db;
    }
    async findAll() {
        return await this.db.collection('registers').find().toArray();
    }
    async findOne(phone) {
        const result = await this.db.collection('registers').find({ phone: phone, }).sort({ "updateAt": -1 }).limit(1).toArray();
        if (!result) {
            throw new common_1.NotFoundException();
        }
        return result[0];
    }
    async replaceOne(register) {
        const objectId = new mongodb_1.ObjectId(register._id);
        try {
            const result = this.db.collection('registers').replaceOne({
                _id: objectId
            }, Object.assign(Object.assign({}, register), { _id: objectId }), {
                upsert: true
            });
            return result;
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteOne(id) {
        if (!mongodb_1.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException();
        }
        const result = await this.db.collection('registers').deleteOne({
            _id: new mongodb_1.ObjectId(id),
        });
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException();
        }
    }
};
RegistersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_mongodb_driver_1.InjectClient)()),
    __metadata("design:paramtypes", [mongodb_1.Db])
], RegistersService);
exports.RegistersService = RegistersService;
//# sourceMappingURL=registers.service.js.map