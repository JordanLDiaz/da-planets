import { dbContext } from "../db/DbContext.js"

class PlanetsService {
  async getAll() {
    const planets = await dbContext.Planets.find().populate('galaxy', 'name stars')
    return planets
  }
  async create(planetData) {
    const newPlanet = await dbContext.Planets.create(planetData)
    await newPlanet.populate('galaxy', 'name stars')
    return newPlanet
  }

}

export const planetsService = new PlanetsService()