import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/Routes';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartProvider } from './component/CartProvider/CartProvider';

function App() {
    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    return (
        <Router>
            <ScrollToTop />
            <CartProvider>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </div>
            </CartProvider>
        </Router>
    );
}

export default App;
