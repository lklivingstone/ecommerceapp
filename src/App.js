import Home from './pages/Home';
import { Button, CssBaseline, useMediaQuery, useTheme } from '@material-ui/core';
import { ProductList } from './pages/ProductList';
import { SingleProduct } from './pages/SingleProduct';
import { Login } from './pages/Login';
import { Register } from './pages/Register'

function App() {


  const theme= useTheme();
  const matches= useMediaQuery(theme.breakpoints.down('md'));
  

  return (
    <>
      <Home />
      {/* <ProductList /> */}
      {/* <SingleProduct /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
