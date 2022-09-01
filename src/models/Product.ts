import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: false,
        },
        desc: {
            type: String,
            required: false,
        },
        stock: {
            type: Number,
            required: true,
        },
        categories: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    { timestamps: true }
  );
  
export default mongoose.model("Product", ProductSchema);
