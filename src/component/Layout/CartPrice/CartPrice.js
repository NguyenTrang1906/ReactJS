import classNames from 'classnames/bind';
import styles from './CartPrice.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '~/component/CartProvider/CartProvider';

const cx = classNames.bind(styles);

function CartPrice({ data }) {
    const inputRef = useRef();
    const productPrice = data.price;
    const [quantity, setQuantity] = useState(1);
    const { removeFromCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    const { removePrice } = useContext(CartContext);
    const { hanleChanged } = useContext(CartContext);

    const index = cart.findIndex((index) => index.id === data.id);

    const handleClickMinus = () => {
        if (quantity > inputRef.current.min) {
            setQuantity(quantity - 1);
        } else {
            removePrice(index);
            removeFromCart(index);
        }
    };

    const handleClickPlus = () => {
        setQuantity(quantity + 1);
    };

    const price = productPrice * quantity;

    useEffect(() => {
        hanleChanged(price, index);
    }, [price]);

    return (
        <tr className={cx('product')}>
            <td className={cx('product-image')}>
                <img className={cx('product-image')} src={data.image} alt={data.name} />
            </td>
            <td className={cx('product-name')}>{data.name}</td>
            <td className={cx('price')}>{productPrice}.000đ</td>
            <td>
                <div className={cx('product-number')}>
                    <button className={cx('minus')} onClick={handleClickMinus}>
                        -
                    </button>
                    <input ref={inputRef} type="number" className={cx('number')} min="1" value={quantity} step="1" />
                    <button className={cx('plus')} onClick={handleClickPlus}>
                        +
                    </button>
                </div>
            </td>
            <td className={cx('price')}>{price}.000đ</td>
        </tr>
    );
}

export default CartPrice;
