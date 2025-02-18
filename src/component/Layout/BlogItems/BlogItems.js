import classNames from 'classnames/bind';
import styles from './BlogItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function BlogItems({ data }) {
    return (
        <div className={cx('item')}>
            <div className={cx('blog-image')}>
                <a href={data.url} target="_blank">
                    <img className={cx('image')} src={data.image} alt={data.title} />
                </a>
            </div>
            <div className={cx('blog-description')}>
                <a href={data.url} target="_blank">
                    <h2 className={cx('title')}>{data.title}</h2>
                </a>
                <p className={cx('description')}>{data.description}</p>
                <div className={cx('information')}>
                    <p className={cx('comments')}>
                        <FontAwesomeIcon icon={faComment} />
                        <span className={cx('comment-count')}>0 Bình Luận</span>
                    </p>
                    <p className={cx('datetime')}>{data.dateTime}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogItems;
