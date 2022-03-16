import Link from "next/link";
import Product from "../../data/models/product.model";

const SmallProduct = ({ product }: { product: Product }) => {
    return (
        <div>
            <Link href={`/products/${product?.id}`}>
                <a className="small-product-box-link">
                    <img className="small-product-box-image" src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/${product?.imgUrls[0]}?alt=media`} alt={product?.name} />
                </a>
            </Link>
            <p className="small-product-box-name">{product?.name}</p>
        </div>
    );
};

export default SmallProduct;