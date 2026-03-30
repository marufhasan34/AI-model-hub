import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubsScribe = () => {
    setIsSubscribed(true);

    const isFound = carts.find((item) => item.id === model.id);
    if (isFound) {
      toast.error("Item already in cart");
      return;
    }
    setCarts([...carts, model]);
    toast.success("Item added to cart");
  };
  return (
    <div>
      <div className="card card-body bg-zinc-200 overflow-hidden shadow-xl border border-gray-300 rounded-2xl ">
        <div className="h-56 flex items-center justify-center">
          <img className="w-40 h-40 image-contain" src={model.image} alt="" />
        </div>
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">{model.title}</h3>
          <p className="text-gray-400">{model.description}</p>
          <p className="text-2xl font-bold">${model.price}/month</p>
        </div>
        <button
          onClick={handleSubsScribe}
          className="btn bg-red-500 rounded-2xl w-full text-white mt-2"
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
