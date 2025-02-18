import classNames from 'classnames/bind';
import styles from './Aside.module.scss';

const cx = classNames.bind(styles);

function Aside({ data }) {
    return (
        <div className={cx('blog-item')}>
            <div className={cx('blog-img')}>
                <img className={cx('image')} src={data.image} alt={data.title} />
            </div>

            <div className={cx('blog-information')}>
                <h2 className={cx('title')}>{data.title}</h2>
                <p className={cx('description')}>{data.description}</p>
            </div>
            <a className={cx('blog-url')} href={data.url} target="_blank">
                Learn More
            </a>
        </div>
    );
}

export default Aside;
