import "./App.css";
import { useState, useEffect} from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // make a state variable to hold the data
  const [data, setData] = useState(bakeryData);
  const [cart, setCart] = useState([]);


  // run when this component is first loaded
  const loadData = () => {
    setData(bakeryData);
  }

  useEffect(() => {
    loadData();
  }, [])

  const addToCart = (item) => {
    console.log('adding to cart:', item);
  
    if (item.price < 5) {
      setCart(prevCart => [...prevCart, item]);
    }
  };

  const buildElements = () => {
    return bakeryData.map((item, index) => (
      <div className="item">
        <BakeryItem key={index} item={item} />
        <button onClick={(e) => {addToCart(item)}}>Add to Cart</button>
      </div>
    ));
  };

  const showCart = () => {
    if (cart.length === 0) {
      console.log('cart is empty');
      return (
        <div>
          <p>Cart is empty</p>
          <p>Total: $0.00</p>
        </div>
      );
    }
  
    const jsxlist = cart.map((item, index) => {
      // Display each item in the cart
      return (
        <p key={index}>
          ${item.price.toFixed(2)} - {item.name}
        </p>
      );
    });
  
    // Calculate total price
    const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  
    return (
      <div>
        {jsxlist}
        <p>Total: ${total}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      

      {buildElements()}


      <div>
        <h2>Cart</h2>
        {showCart()}
      </div>
    </div>
  );
}

export default App;


