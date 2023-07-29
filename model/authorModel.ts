import mongoose from "mongoose"
import { iAuthorData } from "../config/interface" 

const authorModel = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            toLowerCase: true,
        },
        password: {
            type: String,
        },
        avatar: {
            type: String,
        },
        avatarID: {
            type: String,
        },
        articles: [
            {
                type: mongoose.Types.ObjectId,
                ref: "article",
            }
        ]

    },
    {timestamps: true},
)
export default mongoose.model<iAuthorData>("authors", authorModel)