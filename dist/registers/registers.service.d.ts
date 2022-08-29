import { Db } from 'mongodb';
import { Register } from 'src/viewmodel/register';
export declare class RegistersService {
    private readonly db;
    constructor(db: Db);
    findAll(): Promise<any>;
    findOne(phone: string): Promise<any>;
    replaceOne(register: Register): Promise<any>;
    deleteOne(id: string): Promise<void>;
}
