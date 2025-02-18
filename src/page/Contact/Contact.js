import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridgeWater, faCity, faLandmarkFlag } from '@fortawesome/free-solid-svg-icons';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('contact-wrapper')}>
                <header className={cx('contact')}>
                    <h2 className={cx('heading-contact')}>Liên Hệ</h2>
                </header>

                <div className={cx('location')}>
                    <div className={cx('list-location')}>
                        <div className={cx('item-location')}>
                            <div className={cx('border-location')}>
                                <FontAwesomeIcon className={cx('icon-location')} icon={faCity} />
                            </div>

                            <div>
                                <h3 className={cx('name-location')}>Hồ Chí Minh</h3>
                                <div className={cx('detail-location')}>
                                    <p>Địa Chỉ: Thủ Đức, Hồ Chí Minh</p>
                                    <p>E-mail: email@website.com</p>
                                    <p>Điện Thoại : (657) 123-456</p>
                                </div>
                            </div>
                        </div>

                        <div className={cx('item-location')}>
                            <div className={cx('border-location')}>
                                <FontAwesomeIcon className={cx('icon-location')} icon={faLandmarkFlag} />
                            </div>

                            <div>
                                <h3 className={cx('name-location')}>Hà Nội</h3>
                                <div className={cx('detail-location')}>
                                    <p>Địa Chỉ: Đống Đa, Hà Nội</p>
                                    <p>E-mail: email@website.com</p>
                                    <p>Điện Thoại : (657) 123-456</p>
                                </div>
                            </div>
                        </div>

                        <div className={cx('item-location')}>
                            <div className={cx('border-location')}>
                                <FontAwesomeIcon className={cx('icon-location')} icon={faBridgeWater} />
                            </div>

                            <div>
                                <h3 className={cx('name-location')}>Đà Nẵng</h3>
                                <div className={cx('detail-location')}>
                                    <p>Địa Chỉ: Hải Châu, Đà Nẵng</p>
                                    <p>E-mail: email@website.com</p>
                                    <p>Điện Thoại : (657) 123-456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('ask-form')}>
                    <div className={cx('form')}>
                        <h2 className={cx('heading-form')}>Ask us anything</h2>
                        <form>
                            <div className={cx('information')}>
                                <div className={cx('name')}>
                                    <label className={cx('label-name')}>Họ Và Tên</label>
                                    <span className={cx('required-label')}>*</span>
                                    <div>
                                        <input className={cx('infor')} type="text" placeholder="Họ Và Tên" required />
                                    </div>
                                </div>

                                <div className={cx('email')}>
                                    <label className={cx('label-name')}>Email</label>
                                    <span className={cx('required-label')}>*</span>
                                    <div>
                                        <input className={cx('infor')} type="text" placeholder="Email" required />
                                    </div>
                                </div>

                                <div className={cx('message')}>
                                    <label className={cx('label-name')}>Message</label>
                                    <span className={cx('required-label')}>*</span>
                                    <div>
                                        <textarea spellCheck={false} required />
                                    </div>
                                </div>
                                <button type="submit" className={cx('submit-btn')}>
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <iframe
                        title="map"
                        className={cx('map')}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125404.23326909766!2d106.70744683654694!3d10.820319195713006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85e042bf04b%3A0xbb26baec1664394d!2zVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1717640476833!5m2!1svi!2s"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
