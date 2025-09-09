import { PodcastTranferModel } from "../models/podcast-tranfer-model";
import {repoPodcast} from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes = async (): Promise<PodcastTranferModel>=>{

    let responseFormat: PodcastTranferModel = {
        statusCode:0,
        body:[],

    }

    const data = await repoPodcast();     
    
    responseFormat ={
        statusCode:     data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body:data,

    }


    return responseFormat;
};
