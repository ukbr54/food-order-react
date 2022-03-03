//import React, { useState } from "react";
//import Cart from "./components/Cart/Cart";
//import BasicForm from "./components/forms/BasicForm";
//import SimpleInput from "./components/forms/SimpleInput";
//import Header from "./components/Layout/Header";
//import Meals from "./components/Meals/Meals";
//import CartProvider from "./store/CartProvider";

import React from "react";
import { useSelector } from "react-redux";
import Auth from "./components/redux-tutorial/Auth";
import Counter from "./components/redux-tutorial/Counter";
import Header from "./components/redux-tutorial/Header";
import UserProfile from "./components/redux-tutorial/UserProfile";

function App() {

  /*const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }*/

  const isAuth = useSelector(state => state.auth.isAuthenticate); 

  return (
    /* <React.Fragment>
       <div className="app">
         <BasicForm />
       </div>
     </React.Fragment> */
    /*<CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>*/

   <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
   </React.Fragment>

  );
}

export default App;
