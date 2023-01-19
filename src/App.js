import { Box, Container, CssBaseline } from '@mui/material';
import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter , Routes , Route, Router} from 'react-router-dom';
import { clearErrors, loadUser } from './actions/userAction';
import './App.css';
import Footer2 from './Components/Footer2';
import Header from "./Components/Header";
import LoginSignUp from './Components/User/LoginSignUp';
import PosterCard from './Components/PosterCard';
import ProductDetails from './Components/Product/ProductDetails';
import store from "./Components/Store";
import Profile from './Components/User/Profile';
import ProtectedRoute from './Components/Route/ProtectedRoute';
import UpdateProfile from './Components/User/UpdateProfile';
import UpdatePassword from './Components/User/UpdatePassword';
import Cart from './Components/Cart/Cart';
import Shipping from './Components/Cart/Shipping';
import ConfirmOrder from './Components/Cart/ConfirmOrder';
import axios from 'axios';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from './Components/Cart/Payment';
import OrderSuccess from './Components/Cart/OrderSuccess';
import MyOrders from './Components/Order/MyOrders';
import OrderDetails from './Components/Order/OrderDetails';
import Dashboard from './Components/Admin/Dashboard';
import NewProduct from './Components/Admin/NewProduct';
import ProductList from './Components/Admin/ProductList';
import UpdateProduct from './Components/Admin/UpdateProduct';
import OrderList from './Components/Admin/OrderList';
import ProcessOrder from './Components/Admin/ProcessOrder';
import UsersList from './Components/Admin/UsersList';
import UpdateUser from './Components/Admin/UpdateUser';
import ProductReviews from './Components/Admin/ProductReviews';
import NotFound from './Components/Layout/Not Found/NotFound';
import { displayOnDesktop } from './Themes/commonStyles';
import MobileFooter from './Components/MobileFooter';


//will implement forgot password later 9:26 

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey,setStripeApiKey] = useState("");
  
  async function getStripeApiKey() {
    const {data} = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey)
  }

  useEffect(() => {
    store.dispatch(loadUser()).then(()=>{
      store.dispatch(clearErrors());
    });
    
    getStripeApiKey();
  }, [])

  

  return (
    
    <BrowserRouter> 
     <CssBaseline />
     <div className="main">
      
     <Header />
      <div className="app">
      <Routes>
      <Route exact path="/" element={<><Container maxWidth="xl" sx={{mb:3}}><PosterCard /></Container></>} />
      <Route exact path="/posters/:keyword" element={<><Container maxWidth="xl" sx={{mb:3}}><PosterCard /></Container></>} />
      <Route exact path="/categories/posters/:genre" element={<><Container maxWidth="xl" sx={{mb:3}}><PosterCard /></Container></>} />
      <Route exact path="/poster/:id" element={<><ProductDetails /></>} />
      <Route exact path="/login" element={<Container maxWidth="xl" sx={{mb:3}}><LoginSignUp /></Container>} />
      <Route exact path="/account" element={<><ProtectedRoute Component={Profile} /></>} />
      <Route exact path="/account/update" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={UpdateProfile} /></Container>} />
      <Route exact path="/password/update" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={UpdatePassword} /></Container>} />
      <Route exact path="/Cart" element={<><Cart /></>} />
      <Route exact path="/shipping" element={<><Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={Shipping} /></Container></>} />
      <Route exact path="/order/confirm" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={ConfirmOrder} /></Container>} />
      { stripeApiKey && 
          <Route exact path="/process/payment" element={<Elements stripe={loadStripe(stripeApiKey)}><Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={Payment} /></Container></Elements>} />
      }
      <Route exact path="/success" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={OrderSuccess} /></Container>} />
      <Route exact path="/myorders" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={MyOrders} /></Container>} />
      <Route exact path="/order/:id" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute Component={OrderDetails} /></Container>} />
      <Route exact path="/admin/dashboard" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={Dashboard} /></Container>} />
      <Route exact path="/admin/product" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={NewProduct} /></Container>} />
      <Route exact path="/admin/products" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={ProductList} /></Container>} />
      <Route exact path="/admin/product/:id" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={UpdateProduct} /></Container>} />
      <Route exact path="/admin/orders" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={OrderList} /></Container>} />
      <Route exact path="/admin/order/:id" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={ProcessOrder} /></Container>} />
      <Route exact path="/admin/users" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={UsersList} /></Container>} />
      <Route exact path="/admin/user/:id" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={UpdateUser} /></Container>} />
      <Route exact path="/admin/reviews" element={<Container maxWidth="xl" sx={{mb:3}}><ProtectedRoute isAdmin={true} Component={ProductReviews} /></Container>} />
      <Route path="/*" element={<NotFound />} />
      </Routes>
      
      </div>
      <Footer2 />
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
