import { RequestMapping, Controller, RequestMethod } from "../utils/decorator";

@Controller('/user')
export default class MovieController {

    @RequestMapping(RequestMethod.GET, '/all')
    async getUser(ctx) {
        ctx.body = 'user'
    }
}

// /user/getAllbooks
