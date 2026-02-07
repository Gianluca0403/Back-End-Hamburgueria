const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: String,
    description: String,
    address: String,
    phone: String,
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Restaurante', RestauranteSchema);