import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import NewArrivals from "./pages/newArrivals/NewArrivals";
import Bestsellers from "./pages/bestsellers/Bestsellers";
import Gifts from "./pages/gifts/Gifts";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import AuthLayout from "./layouts/AuthLayout";
import Terms from "./pages/terms/Terms";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";
import Verify from "./pages/verify/Verify";


const router = createBrowserRouter ([
    {
        path :'/',
        element: <MainLayout />,
        children :[
            {
                index:true ,
                element :<Home />
            },
            {
                path:'Shop',
                element:
                <ProtectedRouter>
                <Shop/>
                </ProtectedRouter>
            },
            {
                path:'shop/product/:id',
                element:
                <ProtectedRouter>
                <ProductDetails/>
                </ProtectedRouter>
            },

            {
                path:'NewArrivals',
                element:
                <ProtectedRouter>
                <NewArrivals/>
                </ProtectedRouter>
            },
            {
                path:'Bestsellers',
                element:
                <ProtectedRouter>
                <Bestsellers/>
                </ProtectedRouter>
            },
            {
                path:'Gifts',
                element:
                <ProtectedRouter>
                <Gifts/>
                </ProtectedRouter>
            },
            {
                path:'Cart',
                element:
                <ProtectedRouter>
                <Cart/>
                </ProtectedRouter>
            },
            {
                path:'Cart/Checkout',
                element:
                <ProtectedRouter>
                <Checkout/>
                </ProtectedRouter>
            },
            {
                path:'Profile',
                element:
                <ProtectedRouter>
                <Profile/>
                </ProtectedRouter>,
                children:[
                    {
                        index:true,
                        element:<ProfileInfo/>
                    },
                    {
                        path:'Orders',
                        element:<ProfileOrders/>
                    }
                ]
            },
            
            {
                path:'Terms',
                element:
                <ProtectedRouter>
                <Terms/>
                </ProtectedRouter>
            }
            
        ]
    },
    {
        path:'/',
        element:<AuthLayout/>,
        children:[
            {
                path:'Register',
                element:<Register/>
            },
            {
                path:'Login',
                element:<Login/>
            },
            {
                path:'Verify',
                element:<Verify/>
            }
        ]
    }
])

export default router;