import { ArtistData } from "../Artists/type";

interface SongData {
    id: number;
    name: string,
    imgUrl: string,
    artist : ArtistData,
    songUrl: string,
}
export type {SongData}