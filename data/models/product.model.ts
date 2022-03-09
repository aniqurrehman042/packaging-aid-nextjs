export default interface Product {
    _id?: any;
    id: string;
    category_id: string;
    name: string;
    short_description: string;
    description: string;
    meta_title: string;
    meta_description: string;
    img_urls: string[];
}
