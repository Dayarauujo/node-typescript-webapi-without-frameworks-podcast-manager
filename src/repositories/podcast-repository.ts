import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pahtData = path.join(__dirname, "../repositories/podcast.json");

export const repoPodcast = async (
    podcastName?: string
    ): Promise<PodcastModel[]> => {
        const language = "utf-8"

    const rawdata = fs.readFileSync(pahtData, language)
    let jsonFile = JSON.parse(rawdata)
    
    
    if (podcastName){
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
            )
            
        }
        

    return jsonFile;
}