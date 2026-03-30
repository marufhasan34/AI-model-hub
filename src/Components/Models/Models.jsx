import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);
  return (
    <div className="container mx-auto">
      <div className="text-center my-10 space-y-4">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p className="text-gray-800">
          One subscription gives you access to all frontier AI models
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {models.map((model) => (
          <ModelCard
            carts={carts}
            setCarts={setCarts}
            key={model.id}
            model={model}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
