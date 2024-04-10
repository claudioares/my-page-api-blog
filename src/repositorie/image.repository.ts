import { prisma } from "../db/database.config";
import { IImageCreate, IImageInterface, IMethodsRepositoryImage } from "../interfaces/image.interface";

export class ImageRepositoryPrisma implements IMethodsRepositoryImage {
    async create(data: IImageCreate): Promise<IImageInterface> {
        const resultPrisma = await prisma.image.create({
            data: {
                name:data.name,
                url:data.url,
                blogId:data.blogId,
            }
        });

        return resultPrisma;
    }
}