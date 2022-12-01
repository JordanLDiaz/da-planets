import { dbContext } from "../db/DbContext.js"

class SpeciesPluralService {
  async getAll() {
    const speciesPlural = await dbContext.SpeciesPlural.find()
    return speciesPlural
  }

  async create(speciesData) {
    const newSpecies = await dbContext.SpeciesPlural.create(speciesData)
    return newSpecies
  }
}

export const speciesPluralService = new SpeciesPluralService()