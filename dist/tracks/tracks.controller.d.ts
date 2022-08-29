import { Track } from 'src/viewmodel/track';
import { TracksService } from './tracks.service';
export declare class TracksController {
    private readonly trackService;
    constructor(trackService: TracksService);
    insertOne(track: Track): Promise<any>;
    insertMany(tracks: Track[]): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    upsertCount(track: Track): Promise<any>;
    updateOne(id: string, track: Track): Promise<any>;
    deleteOne(id: string): Promise<void>;
}
