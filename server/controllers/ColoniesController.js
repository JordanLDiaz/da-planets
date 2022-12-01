import { coloniesService } from "../services/ColoniesService.js";
import BaseController from "../utils/BaseController.js";

export class ColoniesController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router
      .post('', this.create)
  }

  async create(req, res, next) {
    try {
      const colony = await coloniesService.create(req.body)
      return res.send(colony)
    } catch (error) {
      next(error)
    }
  }
}