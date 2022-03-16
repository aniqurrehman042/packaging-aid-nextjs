import { useState } from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductSpecifications from "../ProductSpecifications/ProductSpecifications";

const ProductDetails = ({description}: {description: string}) => {
    const [isProductDescription, setProductDescription] = useState(false);

    return (
        <section id="productDetailsSection">
    <div className="details-headings-area">
        <h4 className="details-heading left-heading" onClick={() => setProductDescription(false)}>SPECIFICATIONS</h4>
        <h4 className="details-heading right-heading" onClick={() => setProductDescription(true)}>DESCRIPTION</h4>
    </div>
    <ProductSpecifications style={{display: isProductDescription ? 'none' : 'initial'}} />
    <ProductDescription description={description} style={{display: !isProductDescription ? 'none' : 'initial'}} />
</section>
    );
}

export default ProductDetails;