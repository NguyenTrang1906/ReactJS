import classNames from 'classnames/bind';
import styles from './CheckOut.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { useContext } from 'react';
import { CartContext } from '~/component/CartProvider/CartProvider';

const cx = classNames.bind(styles);

function CheckOut() {
    const { cart } = useContext(CartContext);
    const { priceList } = useContext(CartContext);

    const totalPrice = priceList.reduce((acc, curr) => acc + curr, 0);

    return (
        <div className={cx('wrapped')}>
            <Header />
            <div className={cx('checkout')}>
                <div className={cx('checkout-heading')}>
                    <h2>Thanh Toán</h2>
                </div>
                <div className={cx('checkout-body')}>
                    <div className={cx('customer-infor')}>
                        <h2 className={cx('heading-content')}>Thông Tin Cá Nhân</h2>
                        <div>
                            <form>
                                <label className={cx('infor-name')}>Họ Và Tên</label>
                                <span className={cx('require')}>*</span>
                                <p>
                                    <input className={cx('text-input')} type="text" required />
                                </p>

                                <label className={cx('infor-name')}>Địa Chỉ</label>
                                <span className={cx('require')}>*</span>
                                <p>
                                    <input className={cx('text-input')} type="text" required />
                                </p>

                                <label className={cx('infor-name')}>Thành Phố</label>
                                <span className={cx('require')}>*</span>
                                <p>
                                    <input className={cx('text-input')} type="text" required />
                                </p>

                                <label className={cx('infor-name')}>Quận/ Huyện</label>
                                <p>
                                    <input className={cx('text-input')} type="text" />
                                </p>

                                <label className={cx('infor-name')}>Điện Thoại</label>
                                <span className={cx('require')}>*</span>
                                <p>
                                    <input className={cx('text-input')} type="text" required />
                                </p>

                                <label className={cx('infor-name')}>Địa Chỉ Email</label>
                                <span className={cx('require')}>*</span>
                                <p>
                                    <input className={cx('text-input')} type="email" required />
                                </p>

                                <label className={cx('infor-name')}>Thông Tin Khác</label>
                                <p>
                                    <textarea className={cx('text-input')} />
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className={cx('total-price')}>
                        <div className={cx('total-heading')}>
                            <h2 className={cx('heading-content')}>Đơn Hàng Của Bạn</h2>
                        </div>

                        <div className={cx('price')}>
                            <table className={cx('total-table')} cellSpacing="0">
                                <thead className={cx('heading')}>
                                    <tr>
                                        <th className={cx('table-heading')}>Sản Phẩm</th>
                                        <th className={cx('table-heading')}>Giá Tiền</th>
                                    </tr>
                                </thead>
                                <tbody className={cx('body')}>
                                    {cart.map((product, index) => (
                                        <tr>
                                            <td className={cx('product-name')}>{product.name}</td>
                                            <td className={cx('product-price')}>{priceList[index]}.000đ</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className={cx('footer')}>
                                    <tr>
                                        <td className={cx('product-total')}>Tạm Tính</td>
                                        <td className={cx('product-price')}>{totalPrice}.000đ</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('product-total')}>Tổng Tiền</td>
                                        <td className={cx('product-price')}>{totalPrice}.000đ</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <button type="submit" className={cx('place-order')}>
                            Đặt Hàng
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CheckOut;
