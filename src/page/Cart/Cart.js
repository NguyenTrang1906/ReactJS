import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartPrice from '~/component/Layout/CartPrice/CartPrice';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '~/component/CartProvider/CartProvider';

const cx = classNames.bind(styles);

function Cart() {
    const [currentCart, setCurrentCart] = useState(false);
    const { cart } = useContext(CartContext);
    const { priceList } = useContext(CartContext);

    useEffect(() => {
        if (cart.length > 0) {
            setCurrentCart(true);
        } else {
            setCurrentCart(false);
        }
    }, [cart]);

    const totalPrice = priceList.reduce((acc, curr) => acc + curr, 0);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('cart-wrapper')}>
                <div className={cx('cart-heading')}>
                    <h2 className={cx('heading')}>Giỏ Hàng</h2>
                </div>

                {currentCart ? (
                    <div className={cx('cart-body')}>
                        <table className={cx('product-table')} cellSpacing="0">
                            <thead className={cx('heading-table')}>
                                <tr>
                                    <th className={cx('heading-content')}></th>
                                    <th className={cx('heading-content')}>Sản Phẩm</th>
                                    <th className={cx('heading-content')}>Giá Tiền</th>
                                    <th className={cx('heading-content')}>Số Lượng</th>
                                    <th className={cx('heading-content')}>Tổng Cộng</th>
                                </tr>
                            </thead>
                            <tbody className={cx('body-table')}>
                                {cart.map((product) => {
                                    return <CartPrice key={product.id} data={product} />;
                                })}
                                <tr>
                                    <td colSpan="6" className={cx('coupon-update')}>
                                        <input
                                            className={cx('input-coupon')}
                                            type="text"
                                            placeholder="Nhập Mã Giảm Giá"
                                        />
                                        <button type="submit" className={cx('apply-btn')}>
                                            Áp Dụng
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className={cx('total-price')}>
                            <h2 className={cx('total-heading')}>Tổng Tiền</h2>
                            <table className={cx('total-table')} cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <th className={cx('subtotal')}>Tạm Tính</th>
                                        <td className={cx('price')}>{totalPrice}.000đ</td>
                                    </tr>
                                    <tr>
                                        <th className={cx('total')}>Tổng Tiền</th>
                                        <td className={cx('price')}>{totalPrice}.000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to="/cart/checkout">
                                <button className={cx('btn-checkout')}>Thanh Toán</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className={cx('cart-body')}>
                        <div className={cx('cart-content')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faInfo} />
                            <p className={cx('content')}>Hiện Không Có Sản Phẩm Nào</p>
                        </div>

                        <Link to="/">
                            <button className={cx('return')}>Quay lại</button>
                        </Link>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
