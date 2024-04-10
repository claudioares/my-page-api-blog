import { prisma } from "../db/database.config";
import { IBlogCreate, IBlogInterface, IMethodsRepositoryBlog } from "../interfaces/blog.interface";

export class BlogRepositoryPrisma implements IMethodsRepositoryBlog {
    async create(data: IBlogCreate): Promise<IBlogInterface> {
        const resultPrisma = await prisma.blog.create({
            data: {
                title:data.title,
                subtitle:data.subtitle,
                introduction:data.introduction,
                development:data.development,
                conclusion:data.conclusion,
            }
        });

        return resultPrisma
    };
    async getBlogs(): Promise<[]> {
        const resultPrisma = await prisma.blog.findMany();
        return resultPrisma as [];
    };
    async getBlogId(id: string): Promise<IBlogInterface> {
        const resultPrisma = await prisma.blog.findUnique({
            where: {
                id
            },
            include:{
                Image:true
            }
        });

        return resultPrisma as IBlogInterface;
    }
};