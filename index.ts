import express, { Application } from "express"
import env from "dotenv"
import { mainApp } from "./mainApp";

const port: number = parseInt(process.env.PORT!)

const app: Application = express();

mainApp(app);

const server = app.listen(process.env.PORT || port, ()=> {
    console.log("")

})

process.on("uncaughtException", (err: Error) => {
    console.log("shutting down due to uncaughtException");
    console.log("Error: ", err)
});

process.on("unhandledRejection", (reason : any)=> {
    console.log("shutting down due to unhandledRejection Error")
    console.log("Error: ", reason);

    server.close(()=> {
        process.exit(1);
    })
})