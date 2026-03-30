import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };
  const handleDelete = (item) => {
    const filteredArray = carts.filter(c => c.id !== item.id)
    setCarts(filteredArray)
    toast.error("Item deleted");
  }
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-2xl">Your cart</h2>
      {carts.length === 0 ? (
        <p className="text-center text-2xl text-gray-700 py-20">Cart is empty</p>
      ) : (
        <>
          <div>
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between my-7"
              >
                <div>
                  <img
                    className="h-20 w-20 object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="text-center space-y-2">
                  <h1 className=" text-2xl font-extrabold">AI Model</h1>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Price :</h3>
                  <p className="text-lg font-medium">${item.price}/month</p>
                </div>
                <button onClick={() => handleDelete(item)} className="btn btn-error rounded-full ">X</button>
              </div>
            ))}
          </div>
          <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-xl text-2xl font-bold">
            <div>total</div>
            <div>${totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-red-500 text-white text-2xl rounded-2xl p-7 mb-10 "
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
