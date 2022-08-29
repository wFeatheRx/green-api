import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectClient } from 'nest-mongodb-driver';

import { Db, ObjectId } from 'mongodb';
import { Track } from 'src/viewmodel/track';

@Injectable()
export class TracksService {
  constructor(@InjectClient() private readonly db: Db) {}

  public async findAll(): Promise<any> {
    return await this.db.collection('tracks').find().toArray();
  }

  /**
   * 找尋一筆資料
   * @param id
   * @returns
   */
  public async findOne(id: string): Promise<any> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    // eslint-disable-next-line prettier/prettier
    const result = await this.db.collection('tracks').findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }

  /**
   * 新增一筆資料
   */
  public async insertOne(track: Track): Promise<any> {
    try {
      return await this.db.collection('tracks').insertOne(track);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 新增多筆資料
   */
  public async insertMany(tracks: Track[]): Promise<any> {
    try {
      return await this.db.collection('tracks').insertMany(tracks);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
  /**
   * 計數追蹤
   */
  public async upsertCount(track: Track): Promise<any> {
    try {
      const result = this.db.collection('tracks').updateOne(
        // find
        {
          tag: track.tag,
          date: track.date,
        },
        // update
        {
          $inc: { count: 1 },
          $set: {
            tag: track.tag,
            date: track.date,
          },
        },
        // options
        {
          upsert: true,
        },
      );
      return result;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 修改一筆資料
   */
  public async updateOne(id: string, track: Track): Promise<any> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    try {
      const result = this.db.collection('tracks').updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            ...track,
          },
        },
      );

      return result;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 刪除一筆資料
   */
  public async deleteOne(id: string): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException();
    }

    const result = await this.db.collection('tracks').deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}
