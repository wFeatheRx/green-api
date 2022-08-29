import { Module } from '@nestjs/common';
import { MongoDbDriverModule } from 'nest-mongodb-driver';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksModule } from './tracks/tracks.module';
import { RegistersModule } from './registers/registers.module';

@Module({
  imports: [
    MongoDbDriverModule.forRoot({
      url: 'mongodb+srv://green:ms168168@cluster0.rfk3m.mongodb.net/greenDB',
    }),
    TracksModule,
    RegistersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
