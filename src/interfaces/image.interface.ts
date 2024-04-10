export interface IImageInterface {
    id: string,
    name: string,
    url: string,
};

export interface IImageCreate {
    name: string,
    url: string,
    blogId: string,
};

export interface IMethodsRepositoryImage {
    create(data:IImageCreate): Promise<IImageInterface>
}