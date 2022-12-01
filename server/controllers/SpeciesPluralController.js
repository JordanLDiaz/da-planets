import { speciesPluralService } from "../services/SpeciesPluralService.js";
import BaseController from "../utils/BaseController.js";

export class SpeciesPluralController extends BaseController {
  constructor() {
    super('api/speciesPlural')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }
  async getAll(req, res, next) {
    try {
      const speciesPlural = await speciesPluralService.getAll()
      return res.send(speciesPlural)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const newSpecies = await speciesPluralService.create(req.body)
      return res.send(newSpecies)
    } catch (error) {
      next(error)
    }
  }
}