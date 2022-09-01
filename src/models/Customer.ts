import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: false,
        },
        note: {
            type: String,
            required: false,
        },
        categories: {
            type: Array,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    { timestamps: true }
  );
  
export default mongoose.model("Customer", CustomerSchema);
