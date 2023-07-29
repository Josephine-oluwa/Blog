import mongoose from "mongoose"
import env from "dotenv"

export const db = ()=> {
    try {
        mongoose
        .connect(process.env.DATABASE_STRING!)
        .then(() => {
            console.log("connection has been established")
        })
        .catch((error: Error) => {
            console.log("unable to establish connection")
        })
    } catch (error) {
        console.log(error)
    }
};