import classNames from 'classnames/bind';
import styles from './CartProduct.module.scss';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ProductView from '../ProductView/ProductView';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '~/component/CartProvider/CartProvider';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartProduct() {
    const { pathname } = useLocation();
    const [productList, setProductList] = useState(false);
    const [cartList, setCartList] = useState(true);
    const { cart } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
    const { removePrice } = useContext(CartContext);

    useEffect(() => {
        if (cart.length > 0) {
            setProductList(true);
        } else {
            setProductList(false);
        }
    }, [cart]);

    useEffect(() => {
        if (pathname === '/cart' || pathname === '/cart/checkout') {
            setCartList(false);
        }
    }, [pathname]);

    const hanldeClearOnClick = (index) => {
        removeFromCart(index);
        removePrice(index);
    };

    return (
        <div className={cx('wrapped')}>
            <Link to="/cart">
                <div className={cx('cart')}>
                    <FontAwesomeIcon className={cx('icon-bag')} icon={faBagShopping} />
                    <span className={cx('product-count')}>{cart.length}</span>
                </div>
            </Link>

            {!!cartList && (
                <div>
                    {productList ? (
                        <div className={cx('cart-content')}>
                            {cart.map((product, index) => {
                                return (
                                    <div className={cx('product')} key={index}>
                                        <div className={cx('product-infor')}>
                                            <ProductView key={product.id} data={product} />
                                        </div>
                                        <button onClick={() => hanldeClearOnClick(index)} className={cx('btn-icon')}>
                                            <FontAwesomeIcon className={cx('remove-icon')} icon={faCircleXmark} />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className={cx('cart-content')}>
                            <p className={cx('cart-message')}>Không Có Sản Phẩm Trong Giỏ Hàng</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CartProduct;
