import { Router } from "express";
import { IImageCreate } from "../interfaces/image.interface";
import { ImageUsecase } from "../usecases/image.usecase";


export const ImageRouter = Router();


ImageRouter.post("/createimage", async(req, res)=>{
    const data:IImageCreate = req.body as IImageCreate;

    try {
        const usecase = new ImageUsecase();
        const resultUsecase = await usecase.create(data);

        return res.status(201).json({
            resultUsecase
        })
        
    } catch (error) {
        res.json({messege: "Fail in the aplications"});
        return console.log("Fail in the aplications", error);
    }
})