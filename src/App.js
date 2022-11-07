import Home from './pages/Home';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { ProductList } from './pages/ProductList';
import { SingleProduct } from './pages/SingleProduct';
import { Login } from './pages/Login';
import { Logout } from './pages/Logout';
import { Register } from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { Cart } from './pages/Cart';
import { Success } from './pages/Success';
import { useSelector } from 'react-redux';

function App() {


  const theme= useTheme();
  const matches= useMediaQuery(theme.breakpoints.down('md'));
  
  const user= useSelector((state)=>state.user.currUser)

  // const user= false
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {<Home />} />
        <Route path="/products/:category" element= {<ProductList />} />
        <Route path="/product/:id" element= {<SingleProduct />} />
        <Route path="/login" element= {user ? <Navigate to="/" replace /> :  <Login />} />
        <Route path="/register" element= {user ? <Navigate to="/" replace /> :  <Register />} />
        <Route path="/cart" element= {<Cart />} />
        <Route path="/success" element= {<Success />} />
        <Route path="/logout" element= {user ? <Logout /> : <Navigate to="/" replace />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
