import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: bool
    },
    rating: {
        type: float
    },
    company: {
        type: String,
        required: true
    }
}, {timestamps: true})


export const Product  = mongoose.model("Product", productSchema)