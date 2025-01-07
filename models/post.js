const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  preview: { type: String, required: true }, // For preview image URL
  description: { type: String, required: true }, // Short description/excerpt
  blogDetails: { type: String, required: true }, // Full HTML content
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  categoriesName: { type: String }, // Human-readable category name
  views: { type: Number, default: 0 }, // View counter
  comments_count: { type: Number, default: 0 }, // Comment counter
});

module.exports = mongoose.model('Post', PostSchema);
