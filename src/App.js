import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import BasicForm from "./components/forms/BasicForm";
import SimpleInput from "./components/forms/SimpleInput";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
      <div className="app">
        <BasicForm />
      </div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </React.Fragment>

  );
}

export default App;
