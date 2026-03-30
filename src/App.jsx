import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cart from "./Components/Cart/Cart";
import Models from "./Components/Models/Models";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const getModels = async () => {
  const res = await fetch("models.json");
  return res.json();
};

const modelPromise = getModels();
function App() {
  const [active, setActive] = useState("model");
  const [carts,setCarts] = useState([])
  return (
    <>
      <Navbar />
      <Banner />

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          defaultChecked
          onClick={() => setActive("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`cart (${carts.length})`}
          onClick={() => setActive("cart")}
        />
      </div>

      {active === 'model' && <Models carts={carts} setCarts={setCarts} modelPromise={modelPromise} />}
      {active === 'cart' && <Cart  carts={carts} setCarts={setCarts}/>}

      <Footer/>
    </>
  );
}

export default App;
