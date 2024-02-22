import React, { Children }   from 'react';
import './App.css';
import Home from './pages/home/home';
import Order from './pages/order/order';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from './pages/admin/Page/Dashboard/dashboard';
import Cart from './pages/cart/cart';
import Nopage from './pages/nopage/nopage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/signup';
import ProductInfo from './pages/productInfo/productInfo';
import AddProduct from './pages/admin/Page/AddProduct';
import UpdateProduct from './pages/admin/Page/UpdateProduct';
import { ToastContainer} from 'react-toastify';
import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <MyState>
        <Router>
            <Routes>
               <Route  path="/" element = {<Home/>} />
               <Route  path="/order" element = {
                   <ProtectedRoute>
                        <Order/>
                   </ProtectedRoute>
               }/>
               <Route  path="/cart"  element = {<Cart/>}/>
               <Route  path = "/dashboard" element = {
                    <ProtectedRouteForAdmin>
                         <Dashboard/>
                         </ProtectedRouteForAdmin>
               }/>
               <Route  path="/login"   element = {<Login/>}/>
               <Route  path="/signup"   element = {<Signup/>}/>
               <Route  path="/productinfo/:id"   element = {<ProductInfo/>}/>
               <Route  path="/addproduct"   element = {
                      <ProtectedRouteForAdmin>
                          <AddProduct/>
                          </ProtectedRouteForAdmin>
               }/>
               <Route  path="/updateproduct"   element = {
                 
                     <UpdateProduct/>
               
               }/>
               <Route  path = "/*" element = {<Nopage/>}/>
               
           </Routes>
           <ToastContainer/>
         </Router>  
         </MyState> 
  );
}

export default App;

// user

export const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem('user')
    if(user){
      return children
    }else{
       return <Navigate to={'/login'}/>
    }
}

// admin

export const ProtectedRouteForAdmin = ({children}) => {
      const admin = JSON.parse(localStorage.getItem('user'))

      if(admin?.user?.email === 'anshumanchaturvedi91@gmail.com'){
           return children
      }else{
          return <Navigate to={'/login'}/>
      }
}