import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ColonySchema } from "../models/Colony.js";
import { GalaxySchema } from "../models/Galaxy.js";
import { PlanetSchema } from "../models/Planet.js";
import { SpeciesSchema } from "../models/Species.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Colonies = mongoose.model('Colony', ColonySchema);
  SpeciesPlural = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
