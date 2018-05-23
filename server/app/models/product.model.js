const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    originalPrice: Number,
    sellingPrice: Number,
    shippingCost: Number,
    discount: Number,
    couponCode:String,
    picture: String,
    sold:Boolean,
    soldOn:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);