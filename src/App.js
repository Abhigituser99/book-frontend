import { BrowserRouter,Route,Routes } from "react-router-dom";
//pages
import { Home, Contact,Login,Register,Reset,Admin } from "./pages";
//components
import { Header, Footer } from "./components";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import CheckoutDetails from './pages/checkout/CheckoutDetails'
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import NotFound from "./pages/notFound/NotFound";



function App() {
  return (
    <>
    

    <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
     <Route path ='/' element={<Home/>}/>
     <Route path ='/contact' element={<Contact/>}/>
     <Route path ='/login' element={<Login/>}/>
     <Route path ='/register' element={<Register/>}/>
     <Route path ='/reset' element={<Reset/>}/>
     <Route path ='/product-details/:id' element={<ProductDetails/>}/>
     <Route path ='/cart' element={<Cart/>}/>
     <Route path ='/checkout-details' element={<CheckoutDetails/>}/>
     <Route path ='/checkout' element={<Checkout/>}/>
     <Route path ='/checkout-success' element={<CheckoutSuccess/>}/>
     <Route path ='/order-history' element={<OrderHistory/>}/>
     <Route path ='/order-details/:id' element={<OrderDetails/>}/>
     <Route path ='*' element={<NotFound/>}/>


     <Route path ='/admin/*' element={<AdminOnlyRoute><Admin/></AdminOnlyRoute>}/>
    





    </Routes>



    <Footer/>
    
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;