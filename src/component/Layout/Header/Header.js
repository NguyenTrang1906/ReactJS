import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import productList from '~/data/ProductList/ProductList';
import ProductView from '../ProductView/ProductView';
import CartProduct from '../CartProduct/CartProduct';

const cx = classNames.bind(styles);

function Header() {
    const [search, setSearch] = useState(false);
    const [menubar, setMenuBar] = useState(false);
    const ref = useRef();
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = () => {
        if (search) {
            setSearch(false);
        } else {
            setSearch(true);
        }
    };

    const handleMenuBar = () => {
        if (menubar) {
            setMenuBar(false);
        } else {
            setMenuBar(true);
        }
    };

    const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
            setSearch(false);
        }
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const products = productList.filter(
            (product) => product.nameSearch.includes(searchValue) || product.name.includes(searchValue),
        );

        setSearchResult(products);
    }, [searchValue]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img
                            className={cx('logo-link')}
                            src="https://beauty.oceanwp.org/wp-content/uploads/2020/12/blogo.png"
                            alt="logo"
                        />
                    </Link>
                </div>

                <div className={cx('menu-list')}>
                    <Link to="/">
                        <li className={cx('menu-item')}>Trang Chủ</li>
                    </Link>
                    <Link to="/product">
                        <li className={cx('menu-item')}>Sản Phẩm</li>
                    </Link>
                    <Link to="/blog">
                        <li className={cx('menu-item')}>Bài Viết</li>
                    </Link>
                    <Link to="/contact">
                        <li className={cx('menu-item')}>Liên Hệ</li>
                    </Link>
                    <Link to="/myaccount">
                        <li className={cx('menu-item')}>Tài Khoản</li>
                    </Link>
                </div>

                <div className={cx('action')}>
                    <div className={cx('cart')}>
                        <CartProduct />
                    </div>
                    <div ref={ref} className={cx('search')}>
                        <FontAwesomeIcon
                            className={cx('icon-search')}
                            icon={faMagnifyingGlass}
                            onClick={handleSearch}
                        />

                        {!!search && (
                            <Tippy
                                interactive
                                visible={searchValue.length > 0}
                                render={(attrs) => (
                                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                        <div className={cx('popper-wrapped')}>
                                            {searchResult.map((result) => (
                                                <ProductView key={result.id} data={result} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            >
                                <div className={cx('search-value')}>
                                    <input
                                        ref={inputRef}
                                        value={searchValue}
                                        className={cx('search-input')}
                                        type="text"
                                        placeholder="Tìm Kiếm Sản Phẩm"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Tippy>
                        )}
                    </div>
                    <div className={cx('menu-bar')} onClick={handleMenuBar}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    {!!menubar && (
                        <div className={cx('menu-content')}>
                            <Link to="/">
                                <li className={cx('menu-item')}>Trang Chủ</li>
                            </Link>
                            <Link to="/product">
                                <li className={cx('menu-item')}>Sản Phẩm</li>
                            </Link>
                            <Link to="/blog">
                                <li className={cx('menu-item')}>Bài Viết</li>
                            </Link>
                            <Link to="/contact">
                                <li className={cx('menu-item')}>Liên Hệ</li>
                            </Link>
                            <Link to="/myaccount">
                                <li className={cx('menu-item')}>Tài Khoản</li>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
