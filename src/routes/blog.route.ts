import { Router } from "express";
import { IBlogCreate, IBlogInterface, ITypesParamsBlogId } from "../interfaces/blog.interface";
import { BlogUsecase } from "../usecases/blog.usecase";

export const blogRouter = Router();


blogRouter.post("/create", async (req, res)=>{
    const data:IBlogCreate = req.body;

    try {

        const usecase = new BlogUsecase();
        const {id} = await usecase.create(data);


        return res.status(201).json({
            id
        })
        
    } catch (error) {
        res.json({messege: "Fail in the aplications"});
        return console.log("Fail in the aplications", error);
    }
});

blogRouter.get("/blog", async (_, res)=>{
    try {
        const usecase = new BlogUsecase();
        const resultUsecase = await usecase.GETBlog();

        return res.json({
            data:resultUsecase
        })
    } catch (error) {
        res.json({messege: "Fail in the aplications"});
        return console.log("Fail in the aplications", error);
    }
});

blogRouter.get("/blog/id", async (req, res)=>{

    const {id}:ITypesParamsBlogId = req.query as unknown as ITypesParamsBlogId;

    try {
        const usecase = new BlogUsecase();
        const resultUsecase = await usecase.blogId(id);

        return res.json({
            data:resultUsecase
        })
    } catch (error) {
        res.json({messege: "Fail in the aplications"});
        return console.log("Fail in the aplications", error);
    }
});