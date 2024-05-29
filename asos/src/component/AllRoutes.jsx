import {Routes , Route} from 'react-router-dom';
import Women from '../pages/Women';
import Men from '../pages/Men';
import Login from '../pages/Login';
import Fav from '../pages/Fav';
import Cart from '../pages/Cart';

export function AllRoutes(){
  return (
    <Routes>
      
      <Route path="/women" element={<Women/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/fav" element={<Fav/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
  );
}
