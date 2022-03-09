import Link from "next/link";
import Category from "../../data/models/category.model";

const CategoryBox = ({ category }: { category: Category }) => {
    return (
        <Link href={`/categories/${category?.id}`}><a className="product-link">
            <span className="product-box">
                <img className="category-box-image" src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/${category?.img_url}?alt=media`} alt={category?.name} />
                <p className="product-name">{category?.name}</p>
                <a className="btn-view-more">View more</a>
            </span>
        </a></Link>
    );
};

export default CategoryBox;