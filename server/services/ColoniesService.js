import { dbContext } from "../db/DbContext.js"

class ColoniesService {
  async create(colonyData) {
    const colony = await dbContext.Colonies.create(colonyData)
    return colony
  }

}
export const coloniesService = new ColoniesService()