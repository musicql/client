import { ArtistData } from "../../Artists/type";

interface SongCardType {
    id: number;
    name: string,
    artist: ArtistData,
    songUrl:string,

}
export type {SongCardType}