import classNames from 'classnames/bind';
import styles from './LostPassword.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LostPassword() {
    return (
        <div className={cx('wrapped')}>
            <Header />
            <div className={cx('lost-password')}>
                <div className={cx('heading')}>
                    <h2 className={cx('heading-content')}>Quên Mật Khẩu</h2>
                </div>

                <div className={cx('content-wrapped')}>
                    <div className={cx('content')}>
                        <p className={cx('memo-text')}>
                            Vui lòng nhập tên người dùng hoặc địa chỉ email của bạn. Bạn sẽ nhận được liên kết để tạo
                            mật khẩu mới qua email.
                        </p>
                        <form>
                            <label className={cx('input-name')}>Tên Đăng Nhập Hoặc Email</label>
                            <input type="text" required />
                        </form>
                        <Link to="/myaccount/resetpassword">
                            <button type="submit" className={cx('reset-btn')}>
                                Đặt Lại Mật Khẩu
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LostPassword;
