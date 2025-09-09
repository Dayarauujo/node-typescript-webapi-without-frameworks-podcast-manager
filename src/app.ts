import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast-controller'
import { Routes } from "./routes/routes";
import { HttpMethode } from "./utils/http-methodes"

export const app = async (request: http.IncomingMessage, response:http.ServerResponse ) => {
    const baseUrl =  request.url?.split("?")[0]


    //listar podcasts
    if(request.method === HttpMethode.GET && baseUrl === Routes.LIST){
       await getListEpisodes(request, response);
    }

    if(request.method === HttpMethode.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response);
    }

}

