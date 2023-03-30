import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .get('/:planetId/colonies', this.getColoniesByPlanetId)
  }
  async getColoniesByPlanetId(req, res, next) {
    try {
      const colonies = await planetsService.getColoniesByPlanetId(req.params.planetId)
      return res.send(colonies)
    } catch (error) {

    }
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