import Link from "next/link";
import Category from "../../data/models/category.model";

const CategoryBox = ({ category }: { category: Category }) => {
    return (
        <Link href={`/categories/${category?.id}`}>
            <a className="category-link">
                <span className="category-box">
                    <img className="category-box-image" src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/${category?.imgUrl}?alt=media`} alt={category?.name} />
                    <p className="category-name">{category?.name}</p>
                    <button className="btn-view-more">View more</button>
                </span>
            </a>
        </Link>
    );
};

export default CategoryBox;