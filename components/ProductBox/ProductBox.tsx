import Link from "next/link";
import Product from "../../data/models/product.model";

const ProductBox = ({ product }: { product: Product }) => {
    return (
        <Link href={`/products/${product?.id}`}><a className="product-link">
            <span className="product-box">
                <img className="product-box-image" src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/${product?.img_urls[0]}?alt=media`} alt={product?.name} />
                <p className="product-name">{product?.name}</p>
            </span>
        </a></Link>
    );
}

export default ProductBox;