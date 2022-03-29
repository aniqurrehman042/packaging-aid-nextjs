import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ProductBox from "../../components/ProductBox/ProductBox";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Category from "../../data/models/category.model";
import Product from "../../data/models/product.model";
import categories from "../../data/raw/categories";
import products from "../../data/raw/products";

type CategoryPageProps = { category: Category, categoryProducts: Product[]};

const CategoryPage: NextPage<CategoryPageProps> = ({category, categoryProducts}) => {
    const smallProductsList = categoryProducts.map((product, index) => {
        return <ProductBox key={index} product={product}></ProductBox>;
    });

    return (
        <div className="category-page-content">
            <section id="categoryPageSection">
                <div className="heading-holder">
                    <h1 className="page-heading">
                        {category?.name}
                        <div className="heading-underline"></div>
                    </h1>
                </div>
                {category.id != 'box-by-style' &&
                    <div className="category-description" dangerouslySetInnerHTML={{ __html: category?.description }}></div>
                }
                <div className="products-area">
                    {smallProductsList}
                </div>
            </section>
            <aside className="sidebar">
                <QuoteForm />
            </aside>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = (context) => {
    return {
        paths: categories.map((category) => {return {params: {categoryId: category.id}}}),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<CategoryPageProps> = (context) => {
    const categoryId = context!.params!.categoryId;
    const category = categories.filter(category => category.id === categoryId)[0] ?? null;
    const categoryProducts = products.filter(product => product.categoryId === categoryId) ?? [];
    return {
        props: {
            category,
            categoryProducts,
        }
    };
};

export default CategoryPage;