import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { useState } from 'react';
import productList from '~/data/ProductList/ProductList';
import ProductItems from '~/component/Layout/ProductItems/ProductItems';
import { useContext } from 'react';
import { CartContext } from '~/component/CartProvider/CartProvider';

const cx = classNames.bind(styles);

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const { addPrice } = useContext(CartContext);

    const product = productList.find((p) => p.id === parseInt(id));

    const [activeDescription, setActiveDescription] = useState(true);
    const [activeReview, setActiveReview] = useState(false);

    const handleClickActive = () => {
        if (activeDescription && !activeReview) {
            setActiveDescription(false);
            setActiveReview(true);
        } else {
            setActiveDescription(true);
            setActiveReview(false);
        }
    };

    const handleAddProduct = () => {
        addToCart(product);
        addPrice(product.price);
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('product-detail')}>
                <div className={cx('heading')}>
                    <h2 className={cx('product-heading')}>{product.name}</h2>
                </div>
                <div className={cx('product')}>
                    <div className={cx('product-img')}>
                        <img className={cx('product-img')} src={product.image} alt={product.name} />
                    </div>

                    <div className={cx('product-infor')}>
                        <h2 className={cx('product-name')}>{product.name}</h2>
                        <div className={cx('product-meta')}>
                            <p className={cx('product-price')}>{product.price}.000đ</p>
                            <p className={cx('short-description')}>{product.meta}</p>
                        </div>

                        <div className={cx('add-to-cart')}>
                            <button onClick={handleAddProduct} className={cx('btn-add-to-cart')}>
                                Thêm Vào Giỏ Hàng
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('description-review')}>
                    <div className={cx('heading-name')}>
                        <div
                            className={cx('description-heading', { active: activeDescription })}
                            onClick={handleClickActive}
                        >
                            Mô Tả Sản Phẩm
                        </div>
                        <div className={cx('review-heading', { active: activeReview })} onClick={handleClickActive}>
                            Bình Luận
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('description-content', { divActive: activeDescription })}>
                            {product.description}
                        </div>
                        <div className={cx('review-content', { divActive: activeReview })}>
                            <p>Chưa Có Bình Luận Nào</p>
                        </div>
                    </div>
                </div>

                <div className={cx('related-product')}>
                    <h2 className={cx('related-heading')}>Sản Phẩm Liên Quan</h2>
                    <div className={cx('related-list')}>
                        {productList.map((products) => {
                            const price = products.price;

                            if (price <= product.price) {
                                return <ProductItems key={products.id} data={products} />;
                            }
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetail;
