import classNames from 'classnames/bind';
import styles from './ProductItems.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '~/component/CartProvider/CartProvider';

export const cartList = [];
const cx = classNames.bind(styles);

function ProductItems({ data }) {
    const [addproducts, setAddProduct] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { addPrice } = useContext(CartContext);

    const handleOnCLickCart = () => {
        setAddProduct(true);
    };

    const handleAddProduct = () => {
        addToCart(data);
        addPrice(data.price);
    };

    return (
        <div className={cx('product-item')}>
            <Link to={`/product/${data.id}`}>
                <div className={cx('product-img')}>
                    <img className={cx('image1')} src={data.image} alt={data.name} />
                    <img className={cx('image2')} src={data.imageHover} alt={data.name} />
                </div>

                <div className={cx('product-information')}>
                    <h2 className={cx('product-name')}>{data.name}</h2>
                    <p className={cx('product-price')}>{data.price}.000đ</p>
                </div>
            </Link>

            <div className={cx('add-to-cart')}>
                <button type="submit" onClick={handleOnCLickCart} className={cx('btn-add-to-cart')}>
                    {addproducts ? (
                        <Link to="/cart">
                            <p className={cx('view-cart')}>Xem Trong Giỏ Hàng</p>
                        </Link>
                    ) : (
                        <p onClick={handleAddProduct} className={cx('add-to-cart')}>
                            Thêm Vào Giỏ Hàng
                        </p>
                    )}
                </button>
            </div>
        </div>
    );
}

export default ProductItems;
