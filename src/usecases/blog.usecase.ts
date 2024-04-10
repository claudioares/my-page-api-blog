import { IBlogCreate } from "../interfaces/blog.interface";
import { BlogRepositoryPrisma } from "../repositorie/blog.repository";
import { z } from "zod"

export class BlogUsecase {
    private repository:BlogRepositoryPrisma;

    constructor(){
        this.repository = new BlogRepositoryPrisma();
    };


    create(data:IBlogCreate){

        const blogCreateSchema = z.object({
            title: z.string(),
            subtitle: z.string(),
            summary: z.string(),
            introduction: z.string(),
            development: z.string(),
            conclusion: z.string(),
        });

        const _data = blogCreateSchema.parse(data);

        const resultRepository = this.repository.create(_data);


        return resultRepository;

    };

    GETBlog(){
        const resultRepository = this.repository.getBlogs();

        return resultRepository;
    };

    blogId (id: string){

        if(!id){return "Not found nesscessary params"};

        const resultRepository = this.repository.getBlogId(id);

        return resultRepository;

    }
}