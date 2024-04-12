import express, { Application } from "express";
import cors from "cors"
import { blogRouter } from "./routes/blog.route";
import { ImageRouter } from "./routes/image.route";

export class App {

    private app:Application;
    constructor(){
        this.app = express();
    };

    listen(){
        const PORT= 3333;

        this.app.listen(PORT, ()=>{
            console.log(`Server running in the port ${PORT}!!`)
        })
    };

    register(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true }));
        this.app.use(blogRouter);
        this.app.use(ImageRouter);
    }
}