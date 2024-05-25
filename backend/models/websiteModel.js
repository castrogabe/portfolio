const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    language: { type: String, required: true },
    languageDescription: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }, // 4th commit
  },
  {
    timestamps: true,
  }
);

const Website = mongoose.model('Website', websiteSchema);
module.exports = Website;
