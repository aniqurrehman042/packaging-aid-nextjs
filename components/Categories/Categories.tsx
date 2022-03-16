import homePageCategories from '../../data/raw/home-page-categories';
import CategoryBox from '../CategoryBox/CategoryBox';

const Categories = () => {
    const categoriesList = homePageCategories.map((category, index) => {
        return <CategoryBox key={index} category={category}></CategoryBox>;
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