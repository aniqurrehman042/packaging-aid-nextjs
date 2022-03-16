export default interface Product {
    _id?: any;
    id: string;
    categoryId: string;
    name: string;
    shortDescription: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    imgUrls: string[];
}
