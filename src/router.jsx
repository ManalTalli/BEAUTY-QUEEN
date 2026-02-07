import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import NewArrivals from "./pages/newArrivals/NewArrivals";
import Bestsellers from "./pages/bestsellers/Bestsellers";
import Gifts from "./pages/gifts/Gifts";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";


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

        ]
    }
])

export default router;