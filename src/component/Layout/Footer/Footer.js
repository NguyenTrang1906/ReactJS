import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    return (
        <div className={cx('footer-wrapper')}>
            <div className={cx('footer-subscribe')}>
                <div className={cx('subscribe')}>
                    <h2 className={cx('subscribe-title')}>ĐĂNG KÝ ĐỂ NHẬN THÔNG TIN</h2>
                    <form>
                        <div className={cx('email')}>
                            <input type="text" placeholder="Nhập Email" required />
                            <button type="submit" className={cx('subscribe-btn')}>
                                ĐĂNG KÝ
                            </button>
                        </div>

                        <div className={cx('accept-terms')}>
                            <input className={cx('check-input')} type="checkbox" required />
                            <p className={cx('check-terms')}>ACCEPT BEAUTY TERMS</p>
                        </div>
                    </form>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('container')}>
                    <div className={cx('contact')}>
                        <h2 className={cx('heading-content')}>LIÊN HỆ</h2>
                        <div className={cx('content')}>
                            <p>Địa Chỉ: Thủ Đức, Thành Phố Hồ Chí Minh</p>
                            <p>E-mail: email@website.com</p>
                            <p>Điện Thoại : (657) 123-456</p>
                        </div>
                    </div>

                    <div className={cx('beauty-shop')}>
                        <img
                            className={cx('logo-footer')}
                            src="https://beauty.oceanwp.org/wp-content/uploads/2020/12/flogo.png"
                            alt="logo-footer"
                        />
                        <div className={cx('content')}>
                            <p>Nơi được xây dựng để mang lại cho bạn những mỹ phẩm mới bắt kịp xu hướng của thời đại</p>
                        </div>

                        <div className={cx('icon-list')}>
                            <span className={cx('icon')}>
                                <a href="https://www.instagram.com/">
                                    <FontAwesomeIcon className={cx('font-icon')} icon={faInstagram} />
                                </a>
                            </span>

                            <span className={cx('icon')}>
                                <a href="https://www.facebook.com/">
                                    <FontAwesomeIcon className={cx('font-icon')} icon={faFacebook} />
                                </a>
                            </span>

                            <span className={cx('icon')}>
                                <a href="https://x.com/">
                                    <FontAwesomeIcon className={cx('font-icon')} icon={faTwitter} />
                                </a>
                            </span>

                            <span className={cx('icon')}>
                                <a href="https://www.youtube.com/">
                                    <FontAwesomeIcon className={cx('font-icon')} icon={faYoutube} />
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className={cx('commitments')}>
                        <h2 className={cx('heading-content')}>CAM KẾT</h2>
                        <div className={cx('content')}>
                            <p>Hoàn Tiền 100%</p>
                            <p>Giao Hàng Miễn Phí</p>
                            <p>Phục Vụ 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            {!!showBtn && (
                <div className={cx('btn-up')}>
                    <a href="#">
                        <FontAwesomeIcon className={cx('icon-up')} icon={faAngleUp} />
                    </a>
                </div>
            )}
        </div>
    );
}

export default Footer;
