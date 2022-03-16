import productSpecifications from "../../data/raw/product-specifications";

const ProductSpecifications = ({ style }: { style: { display: string } }) => {
    const productSpecificationsList = productSpecifications.map((productSpecification, index) => {
        return (
            <div className="specification-row" key={index}>
                <p className="specification-name">
                    {productSpecification.name}
                </p>
                <p className="specification-value">
                    {productSpecification.value}
                </p>
            </div>
        );
    });

    return (
        <div className="specifications-area" style={style}>
            {productSpecificationsList}
        </div>
    );
}

export default ProductSpecifications;