import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('heading-title')}>PHONG CÁCH MỚI</h2>
                <h2 className={cx('heading-content')}>Hãy Tìm Vẻ Đẹp Đích Thực Của Bạn</h2>
                <Link to="/product">
                    <button className={cx('shop-btn')}>Mua Ngay</button>
                </Link>
            </div>
        </div>
    );
}

export default Slider;
