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
exports.TracksService = void 0;
const common_1 = require("@nestjs/common");
const nest_mongodb_driver_1 = require("nest-mongodb-driver");
const mongodb_1 = require("mongodb");
let TracksService = class TracksService {
    constructor(db) {
        this.db = db;
    }
    async findAll() {
        return await this.db.collection('tracks').find().toArray();
    }
    async findOne(id) {
        if (!mongodb_1.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException();
        }
        const result = await this.db.collection('tracks').findOne({
            _id: new mongodb_1.ObjectId(id),
        });
        if (!result) {
            throw new common_1.NotFoundException();
        }
        return result;
    }
    async insertOne(track) {
        try {
            return await this.db.collection('tracks').insertOne(track);
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async insertMany(tracks) {
        try {
            return await this.db.collection('tracks').insertMany(tracks);
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async upsertCount(track) {
        try {
            const result = this.db.collection('tracks').updateOne({
                tag: track.tag,
                date: track.date,
            }, {
                $inc: { count: 1 },
                $set: {
                    tag: track.tag,
                    date: track.date,
                },
            }, {
                upsert: true,
            });
            return result;
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateOne(id, track) {
        if (!mongodb_1.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException();
        }
        try {
            const result = this.db.collection('tracks').updateOne({
                _id: new mongodb_1.ObjectId(id),
            }, {
                $set: Object.assign({}, track),
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
        const result = await this.db.collection('tracks').deleteOne({
            _id: new mongodb_1.ObjectId(id),
        });
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException();
        }
    }
};
TracksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_mongodb_driver_1.InjectClient)()),
    __metadata("design:paramtypes", [mongodb_1.Db])
], TracksService);
exports.TracksService = TracksService;
//# sourceMappingURL=tracks.service.js.map