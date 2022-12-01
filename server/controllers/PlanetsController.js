import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }
  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const newPlanet = await planetsService.create(req.body)
      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }
}