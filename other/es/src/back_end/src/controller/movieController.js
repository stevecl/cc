import { RequestMapping, Controller, RequestMethod } from "../utils/decorator";
import data from '../../mock/data';

@Controller('/movie')
export default class MovieController {

    @RequestMapping(RequestMethod.GET, '/all')
    async getAllMovies(ctx) {
        // 1 -> 0,9 // 2 -> 10, 19
        const [key, page] = ctx.querystring.split('=');
        ctx.body = {
            data: data._embedded.episodes.slice((page - 1) * 10, page * 10 - 1),
            count: data._embedded.episodes.length
        }
    }

    @RequestMapping(RequestMethod.GET)
    async id(ctx) {
        ctx.body = 'getAllMovies'
    }
}

// /movie/all
