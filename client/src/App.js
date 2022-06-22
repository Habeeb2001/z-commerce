import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import HomePage from "./components/views/HomePage"
import ProductPage from './components/views/ProductPage';
import Cart from './components/views/CartPage';
import OrderProduct from './components/views/OrderProduct';
import SigninPage from './components/views/SignInPage';
import { useSelector } from 'react-redux';
import RegisterPage from './components/views/RegisterPage';
// import Cookies from 'js-cookie';
import Cookie from 'js-cookie'
import CreateProductPage from './components/views/createProductPage';


function App() {
  const userSignin = useSelector(state => state.userSignin)
  // const userInfo = Cookie.get("userInfo")
  const {userInfo} = userSignin
  function openSideBar() {
    document.querySelector(".side-Navigation").classList.add("open")
  }


  function cancelSidebar() {
    document.querySelector(".side-Navigation").classList.remove("open")
  }

  return (

    <div className="parent-container">
      <div className="header">
        <h2 className="brand-logo">
          <button id="openSideBar" onClick={openSideBar} > &#9776; </button>
          <Link id='logo' to="/"> Z-commerce</Link></h2>
        <nav>
          <Link id="nav-link" to="#">cart</Link>

          
            { userInfo ?<Link id="nav-link" to="/profile">{userInfo.name}</Link>:
            <Link to="/signin" id="nav-link">Sign In</Link>
            }
          
          
          
        </nav>
      </div>
      <div className="main">

        <Routes>
          {/* main wrapper */}
          <Route path='/signin' element={<SigninPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart/:id/:qty" element={<Cart />} />
          <Route path="/orderproduct/:id/:qty" element={<OrderProduct/>} />
          <Route path="/" exact={true}  element={<HomePage />} />
          <Route path="/createproduct" element={<CreateProductPage/>}/>
        </Routes>

      </div>
      <footer className="footer">
        All Rights reserved and valued
      </footer>

      <aside className="side-Navigation">
        <div>
          <button className='close-sideNav' onClick={cancelSidebar}>x</button>
        </div>

        <ul className="navigations">
          <li><Link id='productLinks' to="#">clothings</Link></li>
          <li><Link id='productLinks' to="#">drinks</Link></li>
          <li><Link id="productLinks" to="#">Electronics</Link></li>
          <li><Link id="productLinks" to="#">Gadgets</Link></li>
        </ul>
      </aside>
    </div>

  )
}

export default App;