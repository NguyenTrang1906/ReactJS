import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import BlogItems from '~/component/Layout/BlogItems/BlogItems';
import blogList from '~/data/BlogList/BlogList';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('blog')}>
                <div className={cx('blog-heading')}>
                    <h2 className={cx('heading')}>Bài Viết</h2>
                </div>

                <div className={cx('blog-wrapper')}>
                    <div className={cx('menu-blog')}>
                        {blogList.map((blog) => {
                            return <BlogItems key={blog.id} data={blog} />;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
