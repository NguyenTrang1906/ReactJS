import Home from '~/page/Home/Home';
import Blog from '~/page/Blog/Blog';
import Contact from '~/page/Contact/Contact';
import Myaccount from '~/page/MyAccount/Myaccount';
import Product from '~/page/Product/Product';
import LostPassword from '~/page/MyAccount/LostPassword/LostPassword';
import ResetPassword from '~/page/MyAccount/ResetPassword/ResetPassword';
import ProductDetail from '~/page/ProductDetail/ProductDetail';
import Cart from '~/page/Cart/Cart';
import CheckOut from '~/page/Cart/CheckOut/CheckOut';
import Register from '~/page/MyAccount/Register/Register';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/blog',
        component: Blog,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/myaccount',
        component: Myaccount,
    },
    {
        path: '/product',
        component: Product,
    },
    {
        path: '/myaccount/lostpassword',
        component: LostPassword,
    },
    {
        path: '/myaccount/resetpassword',
        component: ResetPassword,
    },
    {
        path: '/product/:id',
        component: ProductDetail,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/cart/checkout',
        component: CheckOut,
    },
    {
        path: '/myaccount/signup',
        component: Register,
    },
];

export { publicRoutes };
