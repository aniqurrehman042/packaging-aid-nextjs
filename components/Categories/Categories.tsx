import categories from '../../data/raw/categories';
import CategoryBox from '../CategoryBox/CategoryBox';

const Categories = () => {
    const categoriesList = categories.map((category) => {
        return <CategoryBox category={category}></CategoryBox>;
    });
    return (
        <section id="categoriesSection">
            <h2 className="section-heading">Pick your category</h2>
            <div className="categories-area">
                {categoriesList}
            </div>
        </section>
    );
}

export default Categories;