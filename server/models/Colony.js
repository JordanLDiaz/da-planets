import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const ColonySchema = new Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true },
  planetId: { type: ObjectId, required: true, ref: 'Planet' },
  speciesId: { type: ObjectId, required: true, ref: 'Species' }
},
  { timestamps: true, toJSON: { virtuals: true } })

ColonySchema.virtual('planet', {
  localField: 'planetId',
  ref: 'Planet',
  foreignField: '_id',
  justOne: true
})

ColonySchema.virtual('species', {
  localField: 'speciesId',
  ref: 'Species',
  foreignField: '_id',
  justOne: true
})