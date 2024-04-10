export interface IBlogInterface {
    id: string,
    title: string,
    subtitle: string,
    introduction: string,
    development: string,
    conclusion: string,
};

export interface IBlogCreate {
    title: string,
    subtitle: string,
    summary: string,
    introduction: string,
    development: string,
    conclusion: string,
};

export interface ITypesParamsBlogId {
    id: string;
};

export interface IMethodsRepositoryBlog {
    create(data:IBlogCreate): Promise<IBlogInterface>
    getBlogs(): Promise<[]>
    getBlogId(id:string): Promise<IBlogInterface>
}