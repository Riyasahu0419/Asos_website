import {Routes , Route} from 'react-router-dom';
import Women from '../pages/Women';
import Men from '../pages/Men';
import Login from '../pages/Login';
import Fav from '../pages/Fav';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import MenProduct from '../pages/MenProduct';
import MenDetail from '../pages/MenDetail';

export function AllRoutes(){
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/fav" element={<Fav/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/menproduct" element={<MenProduct/>}/>
      <Route path="/productdetail/:id" element={<ProductDetail/>}/>
      <Route path="/mendetail/:id" element={<MenDetail/>}/>
    </Routes>
    
  );
}
