import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
})

export const Category = mongoose.model("Category", categorySchema)
