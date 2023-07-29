import mongoose from "mongoose"

const articleModel = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
        imageID: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        CoverImageId: {
            type: String,
        },
        likes: {
            type: String,
        },
        rate: {
            type: String,
        },
        ratings: [
            {
                type: mongoose.Types.ObjectId,
                ref: "ratings"
            }
        ],
        author: [
            {
                type: mongoose.Types.ObjectId,
                ref: "authors",
            }

        ]
    },
    {timestamps: true}
)