import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [incorrectPassword, setIncorrectPassword] = useState(false);

    useEffect(() => {
        if (password !== confirmPassword) {
            setIncorrectPassword(true);
        } else {
            setIncorrectPassword(false);
        }
    }, [confirmPassword]);

    const handleChangePassWord = (e) => {
        const password = e.target.value;

        if (!password.startsWith(' ')) {
            setPassword(password);
        }
    };

    const handleChangeConfirmPassWord = (e) => {
        const confirmPassword = e.target.value;

        if (!confirmPassword.startsWith(' ')) {
            setConfirmPassword(confirmPassword);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('signup-wrapper')}>
                <div className={cx('signup-heading')}>
                    <h2 className={cx('heading')}>Tài Khoản</h2>
                </div>
                <div className={cx('signup-infor')}>
                    <div className={cx('infor-wrapper')}>
                        <h2 className={cx('infor-heading')}>Đăng Ký</h2>
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
                                        <input
                                            value={password}
                                            className={cx('text-input-password')}
                                            type="password"
                                            required
                                            onChange={handleChangePassWord}
                                        />
                                    </p>
                                </div>

                                <div className={cx('infor')}>
                                    <label className={cx('infor-name')}>Nhập Lại Mật Khẩu</label>
                                    <span className={cx('require')}>*</span>
                                    <p>
                                        <input
                                            value={confirmPassword}
                                            className={cx('text-input-password-again')}
                                            type="password"
                                            required
                                            onChange={handleChangeConfirmPassWord}
                                        />
                                    </p>

                                    {!!incorrectPassword && (
                                        <p className={cx('check-password')}>Mật Khẩu Không Trùng Khớp</p>
                                    )}
                                </div>

                                <div className={cx('check')}>
                                    <input className={cx('checkbox')} type="checkbox" />
                                    <label className={cx('checkbox-infor')}>Ghi Nhớ</label>
                                </div>

                                <button type="submit" className={cx('signup-btn')}>
                                    Đăng Ký
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

export default Register;
