import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import ProductItems from '~/component/Layout/ProductItems/ProductItems';
import productList from '~/data/ProductList/ProductList';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('product')}>
                <div className={cx('product-heading')}>
                    <h2 className={cx('heading')}>Sản Phẩm</h2>
                </div>

                <div className={cx('product-wrapper')}>
                    <div className={cx('menu-product')}>
                        {productList.map((product) => {
                            return <ProductItems key={product.id} data={product} />;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
