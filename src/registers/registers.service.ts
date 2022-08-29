import {
  BadRequestException,
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectClient } from 'nest-mongodb-driver';

import { Db, ObjectId } from 'mongodb';
import { Register } from 'src/viewmodel/register';

@Injectable()
export class RegistersService {
  constructor(@InjectClient() private readonly db: Db) { }

  public async findAll(): Promise<any> {
    return await this.db.collection('registers').find().toArray();
  }

  /**
   * 找尋一筆資料
   * @param id
   * @returns
   */
  public async findOne(phone: string): Promise<any> {


    //const result = await this.db.collection('registers').findOne({phone: phone,});

    const result = await this.db.collection('registers').find({ phone: phone, }).sort({ "updateAt": -1 }).limit(1).toArray()

    if (!result) {
      throw new NotFoundException();
    }

    return result[0];
  }


  /**
   * 修改一筆資料
   */

  public async replaceOne(register: Register): Promise<any> {

    const objectId = new ObjectId(register._id)

    try {
      const result = this.db.collection('registers').replaceOne(
        {
          _id: objectId
        },
        {
          ...register,
          _id: objectId
        },
        {
          upsert: true
        }
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

    const result = await this.db.collection('registers').deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}
