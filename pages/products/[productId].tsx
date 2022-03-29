import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRef, useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Specifications from "../../components/Specifications/Specifications";
import Product from "../../data/models/product.model";
import products from "../../data/raw/products";

type ProductPageProps = { product: Product };

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageX, setImageX] = useState(0);
    const [imageY, setImageY] = useState(0);
    const zoomImageBox = useRef<HTMLDivElement>(null);

    const changeProductImage = (imageIndex: number): void => {
        setCurrentImageIndex(imageIndex);
    }

    const imageMouseMove = (e: React.MouseEvent) => {
        let imageBoxRect = zoomImageBox.current?.getBoundingClientRect();
        setImageX(((e.clientX - imageBoxRect!.left) / imageBoxRect!.width) * 100 * 1.6);
        setImageY(((e.clientY - imageBoxRect!.top) / imageBoxRect!.height) * 100 * 1.6);
    }

    const resetImage = () => {
        setImageX(0);
        setImageY(0);
    }

    const productImages = product.imgUrls.map((imgUrl, index) => (
        <div key={index} className="product-thumbnail-box"
            onClick={() => changeProductImage(index)}>
            <img className="product-thumbnail"
                src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/${imgUrl}?alt=media`}
                alt={product?.name} />
        </div>
    ));
    return (
        <main>
    <div className="top-content">
        <section id="productGallerySection">
            <div ref={zoomImageBox} className="zoom-image-area" onMouseOut={() => resetImage()} onMouseMove={(e) => imageMouseMove(e)}>
                <img className="zoom-image" style={{transformOrigin: `${imageX}% ${imageY}%`}}
                    src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/${product?.imgUrls[currentImageIndex]}?alt=media`}
                    alt={product?.name} />
            </div>
            <div className="product-thumbnails-area">
                {productImages}
            </div>
        </section>
        <section id="productDescriptionSection">
            <h1 className="page-heading">
                {product?.name}
                <div className="heading-underline"></div>
            </h1>
            {product.categoryId !== 'box-by-style' &&
                <div className="product-description"
                dangerouslySetInnerHTML={{__html: product?.shortDescription}}></div>
            }
            {product.categoryId === 'box-by-style' &&
            <Specifications />
        }
        </section>
        <section id="formQuoteSection">
            <QuoteForm />
        </section>
    </div >
    {product.categoryId !== 'box-by-style' &&
            <Specifications />
        }
        {product.categoryId !== 'box-by-style' &&
            <ProductDetails description={product?.description} />
        }
</main >
    );
}

export const getStaticPaths: GetStaticPaths = (context) => {
    return {
        paths: products.map((product) => { return { params: { productId: product.id } } }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = (context) => {
    const productId = context!.params!.productId;
    const product = products.filter(product => product.id === productId)[0] ?? null;
    return {
        props: {
            product,
        }
    };
};

export default ProductPage;