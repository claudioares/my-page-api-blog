import {z} from "zod";
import { IImageCreate } from "../interfaces/image.interface";
import { ImageRepositoryPrisma } from "../repositorie/image.repository";

export class ImageUsecase {

    private repository:ImageRepositoryPrisma;
    constructor(){
        this.repository = new ImageRepositoryPrisma()
    };


    async create(data:IImageCreate){

        const createImageSchema = z.object({
            name: z.string(),
            url: z.string(),
            blogId: z.string(),
        });

        const _dataImage = createImageSchema.parse(data);

        const resultRepository = await this.repository.create(_dataImage);

        return resultRepository;
    }
}