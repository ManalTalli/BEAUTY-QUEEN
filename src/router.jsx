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
                path:'/Shop',
                element:<Shop/>
            },

            {
                path:'/NewArrivals',
                element:<NewArrivals/>
            },
            {
                path:'/Bestsellers',
                element:<Bestsellers/>
            },
            {
                path:'/Gifts',
                element:<Gifts/>
            },
            {
                path:'/Cart',
                element:<Cart/>
            },
            {
                path:'/Terms',
                element:<Terms/>
            }
            
        ]
    },
    {
        path:'/',
        element:<AuthLayout/>,
        children:[
            {
                path:'/Register',
                element:<Register/>
            },
            {
                path:'/Login',
                element:<Login/>
            }
        ]
    }
])

export default router;