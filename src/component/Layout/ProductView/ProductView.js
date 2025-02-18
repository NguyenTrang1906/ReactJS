import classNames from 'classnames/bind';
import styles from './ProductView.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductView({ data }) {
    return (
        <Link to={`/product/${data.id}`}>
            <div className={cx('product-item')}>
                <div className={cx('product-img')}>
                    <img className={cx('image')} src={data.image} alt={data.name} />
                </div>

                <div className={cx('product-information')}>
                    <h2 className={cx('product-name')}>{data.name}</h2>
                    <p className={cx('product-price')}>{data.price}.000đ</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductView;
