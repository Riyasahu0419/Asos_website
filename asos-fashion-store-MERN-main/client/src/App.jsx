import './App.css'
import { AllRoutes } from './component/AllRoutes'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home';

function App() {

  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/> 
    </>
  );
}

export default App
