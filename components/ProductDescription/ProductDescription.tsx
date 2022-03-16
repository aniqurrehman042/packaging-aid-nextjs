import { useEffect, useState } from "react";

const ProductDescription = ({description, style}: {description: string, style: {display: string}}) => {
    const [productDescription, setProductDescription] = useState('');

    useEffect(() => {
        setProductDescription(description);
    }, []);

    return <p className="product-description" dangerouslySetInnerHTML={{__html: productDescription}} style={style}></p>;
}

export default ProductDescription;