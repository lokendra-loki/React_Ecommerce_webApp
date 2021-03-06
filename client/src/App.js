import Home from "./pages/home/Home";
import CategoryProductlist from "./pages/categoryProductlist/CategoryProductList";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  
  const user  = useSelector(state => state.user.currentUser)


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Register/>} />
          <Route exact path="/products/:category" element={<CategoryProductlist />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
























// import Home from "./pages/home/Home";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import CategoryProductList from "./pages/categoryProductlist/CategoryProductList";
// import SingleProduct from "./pages/singleProduct/SingleProduct";
// import Cart from "./pages/cart/Cart";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";


// function App() {
//   const user = true;
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/products/:category" element={<CategoryProductList />} />
//           <Route path="/product/:id" element={<SingleProduct />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
//           <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;