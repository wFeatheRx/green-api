"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nest_mongodb_driver_1 = require("nest-mongodb-driver");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tracks_module_1 = require("./tracks/tracks.module");
const registers_module_1 = require("./registers/registers.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_mongodb_driver_1.MongoDbDriverModule.forRoot({
                url: 'mongodb+srv://green:ms168168@cluster0.rfk3m.mongodb.net/greenDB',
            }),
            tracks_module_1.TracksModule,
            registers_module_1.RegistersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map