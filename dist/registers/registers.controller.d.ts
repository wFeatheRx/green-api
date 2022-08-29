import { Register } from 'src/viewmodel/register';
import { RegistersService } from './registers.service';
export declare class RegistersController {
    private readonly registerService;
    constructor(registerService: RegistersService);
    findAll(): Promise<any>;
    findOne(phone: string): Promise<any>;
    replaceOne(register: Register): Promise<any>;
    deleteOne(id: string): Promise<void>;
}
