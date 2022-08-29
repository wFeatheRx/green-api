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
exports.TracksController = void 0;
const common_1 = require("@nestjs/common");
const track_1 = require("../viewmodel/track");
const tracks_service_1 = require("./tracks.service");
let TracksController = class TracksController {
    constructor(trackService) {
        this.trackService = trackService;
    }
    insertOne(track) {
        return this.trackService.insertOne(track);
    }
    insertMany(tracks) {
        return this.trackService.insertMany(tracks);
    }
    findAll() {
        return this.trackService.findAll();
    }
    findOne(id) {
        return this.trackService.findOne(id);
    }
    upsertCount(track) {
        return this.trackService.upsertCount(track);
    }
    updateOne(id, track) {
        return this.trackService.updateOne(id, track);
    }
    deleteOne(id) {
        return this.trackService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [track_1.Track]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "insertOne", null);
__decorate([
    (0, common_1.Post)('/batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "insertMany", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/counter'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [track_1.Track]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "upsertCount", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, track_1.Track]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "deleteOne", null);
TracksController = __decorate([
    (0, common_1.Controller)('api/tracks'),
    __metadata("design:paramtypes", [tracks_service_1.TracksService])
], TracksController);
exports.TracksController = TracksController;
//# sourceMappingURL=tracks.controller.js.map