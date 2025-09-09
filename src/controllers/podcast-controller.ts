import {IncomingMessage, request, ServerResponse} from 'http';
import { PodcastTranferModel } from '../models/podcast-tranfer-model';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import {serviceListEpisodes} from '../services/list-episodes-service'
import { ContentType } from '../utils/content-type';
;

const DEFAULT_CONTENT = {'content-type': ContentType.JSON};

export const getListEpisodes = async (
    req : IncomingMessage, 
    res: ServerResponse
) => {

    const content = await serviceListEpisodes();

    res.writeHead(content.statusCode,DEFAULT_CONTENT);
    res.write( JSON.stringify(content))
    res.end();
};


export const getFilterEpisodes = async (
    req : IncomingMessage, 
    res: ServerResponse
) => {

   

    const content:PodcastTranferModel = await serviceFilterEpisodes(req.url);
   
    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body))
    res.end();
};