import { Auth0Provider } from "@bcwdev/auth0provider";
import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

// function _middleWareDemo(req, res, next) {
//   logger.log('hitting middleware')
//   next()
// }
export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      // .use(_middleWareDemo)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }
  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const newGalaxy = await galaxiesService.create(req.body)
      return res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }
}