import { NextPage } from "next";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import categories from "../../data/raw/categories";

const CategoriesPage: NextPage = () => {
    const categoryBoxesList = categories.filter((category) => category.id !== 'box-by-style').map((category, index) => {
        return <CategoryBox category={category} key={index}></CategoryBox>;
    });

    return (
        <section className="padding-2">
            <h2 className="section-heading">Categories</h2>
            <div className="categories-area">
                {categoryBoxesList}
            </div>
        </section>
    );
}

export default CategoriesPage;