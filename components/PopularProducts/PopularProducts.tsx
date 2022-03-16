import popularProducts from "../../data/raw/popular-products";
import ProductBox from "../ProductBox/ProductBox";

const PopularProducts = () => {
    const popularProductsList = popularProducts.map((product, index) => {
        return <ProductBox key={index} product={product}></ProductBox>
    });
    return (
        <section id="popular-products-section">
            <h2 className="section-heading">Popular Products</h2>
            <div className="popular-products-area">
                {popularProductsList}
            </div>
        </section>
    );
}

export default PopularProducts;