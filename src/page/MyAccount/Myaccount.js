import classNames from 'classnames/bind';
import styles from './Myaccount.module.scss';
import { Link } from 'react-router-dom';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';

const cx = classNames.bind(styles);

function Myaccount() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('myaccount-wrapper')}>
                <div className={cx('myaccount-heading')}>
                    <h2 className={cx('heading')}>Tài Khoản</h2>
                </div>
                <div className={cx('myaccount-infor')}>
                    <div className={cx('infor-wrapper')}>
                        <h2 className={cx('infor-heading')}>Đăng Nhập</h2>
                        <div className={cx('infor-form')}>
                            <form>
                                <div className={cx('infor')}>
                                    <label className={cx('infor-name')}>Tên Đăng Nhập Hoặc Email</label>
                                    <span className={cx('require')}>*</span>
                                    <p>
                                        <input className={cx('text-input')} type="text" required />
                                    </p>
                                </div>

                                <div className={cx('infor')}>
                                    <label className={cx('infor-name')}>Mật Khẩu</label>
                                    <span className={cx('require')}>*</span>
                                    <p>
                                        <input className={cx('text-input')} type="password" required />
                                    </p>
                                </div>

                                <div className={cx('check')}>
                                    <input className={cx('checkbox')} type="checkbox" />
                                    <label className={cx('checkbox-infor')}>Ghi Nhớ</label>
                                </div>

                                <button type="submit" className={cx('login-btn')}>
                                    Đăng Nhập
                                </button>

                                <Link to="/myaccount/lostpassword">
                                    <p className={cx('forget-password')}>Quên Mật Khẩu</p>
                                </Link>

                                <div className={cx('sign-up-wrapped')}>
                                    <p className={cx('content-sign-up')}>Chưa Có Tài Khoản?</p>
                                    <Link to="/myaccount/signup">
                                        <p className={cx('sign-up')}>Đăng Ký</p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Myaccount;
