import { Db } from 'mongodb';
import { Track } from 'src/viewmodel/track';
export declare class TracksService {
    private readonly db;
    constructor(db: Db);
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    insertOne(track: Track): Promise<any>;
    insertMany(tracks: Track[]): Promise<any>;
    upsertCount(track: Track): Promise<any>;
    updateOne(id: string, track: Track): Promise<any>;
    deleteOne(id: string): Promise<void>;
}
