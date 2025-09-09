import { IncomingMessage } from "http";
import { PodcastTranferModel } from "../models/podcast-tranfer-model";
import { repoPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
):Promise<PodcastTranferModel>  => {

    //define a interface de retorno
    let responseFormat: PodcastTranferModel = {
        statusCode:0,
        body:[],
    };
    
    //buscando os dado
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

  
    responseFormat ={
        statusCode:     data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body:data,

    }


    return responseFormat;
}