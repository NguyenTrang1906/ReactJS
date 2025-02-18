import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Header from '~/component/Layout/Header/Header';
import Slider from '~/component/Layout/Section/Slider/Slider';
import Footer from '~/component/Layout/Footer/Footer';
import productList from '~/data/ProductList/ProductList';
import ProductItems from '~/component/Layout/ProductItems/ProductItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import blogList from '~/data/BlogList/BlogList';
import Aside from '~/component/Layout/Section/Aside/Aside';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const blogRef = useRef();

    const prevBlog = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextBlog = () => {
        if (window.innerWidth > 1024) {
            if (currentIndex < blogList.length - 3) {
                setCurrentIndex(currentIndex + 1);
            }

            if (currentIndex === blogList.length - 3) {
                setCurrentIndex(0);
            }
        } else if (window.innerWidth >= 740 && window.innerWidth <= 1023) {
            if (currentIndex < blogList.length - 2) {
                setCurrentIndex(currentIndex + 1);
            }

            if (currentIndex === blogList.length - 2) {
                setCurrentIndex(0);
            }
        } else {
            if (currentIndex < blogList.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }

            if (currentIndex === blogList.length - 1) {
                setCurrentIndex(0);
            }
        }
    };

    useEffect(() => {
        const blogWidth = blogRef.current.children[0].offsetWidth + 10;

        blogRef.current.style.transform = `translateX(${-currentIndex * blogWidth}px)`;
    }, [currentIndex]);

    return (
        <div className="wrapper">
            <Header />
            <div>
                <Slider />
                <div className={cx('home-product')}>
                    <h2 className={cx('product-heading')}>Sản Phẩm Bán Chạy</h2>
                    <div className={cx('product')}>
                        {productList.map((product) => {
                            const price = product.price;
                            if (price > 500) {
                                return <ProductItems key={product.id} data={product} />;
                            }
                        })}
                    </div>
                </div>

                <div className={cx('blog')}>
                    <div>
                        <h2 className={cx('blog-heading')}>Bài Viết</h2>
                    </div>
                    <div className={cx('blog-list')}>
                        <span className={cx('chevron-left')}>
                            <FontAwesomeIcon onClick={prevBlog} className={cx('chevron-left')} icon={faChevronLeft} />
                        </span>
                        <div className={cx('new-blog-wrapped')}>
                            <div ref={blogRef} className={cx('new-blog')}>
                                {blogList.map((blog) => (
                                    <Aside key={blog.id} data={blog} />
                                ))}
                            </div>
                        </div>
                        <span className={cx('chevron-right')}>
                            <FontAwesomeIcon onClick={nextBlog} className={cx('chevron-right')} icon={faChevronRight} />
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
