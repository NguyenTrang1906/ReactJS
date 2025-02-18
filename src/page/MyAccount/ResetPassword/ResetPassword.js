import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';

const cx = classNames.bind(styles);

function ResetPassword() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('resetpassword-wrapper')}>
                <div className={cx('reset-heading')}>
                    <h2 className={cx('heading')}>Đặt Lại Mật Khẩu</h2>
                </div>
                <div className={cx('reset-infor')}>
                    <div className={cx('infor-wrapper')}>
                        <div className={cx('infor-form')}>
                            <form>
                                <div className={cx('infor')}>
                                    <label className={cx('infor-name')}>Mật Khẩu Mới</label>
                                    <span className={cx('require')}>*</span>
                                    <p>
                                        <input className={cx('reset-password')} type="password" required />
                                    </p>
                                </div>

                                <div className={cx('infor')}>
                                    <label className={cx('infor-name')}>Nhập Lại Mật Khẩu</label>
                                    <span className={cx('require')}>*</span>
                                    <p>
                                        <input className={cx('reset-password')} type="password" required />
                                    </p>
                                </div>

                                <button type="submit" className={cx('save-btn')}>
                                    Lưu Mật Khẩu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ResetPassword;
