import React from "react";
import products from "../data/products.json"; // <--- path to your JSON

const colorClasses = [
  "border-orange-400 ",
  "border-purple-400 ",
  "border-green-400 ",
  "border-red-400 ",
  "border-yellow-400 ",
  "border-blue-400 ",
  "border-teal-400 ",
  "border-rose-400 ",
  "border-lime-400 ",
  "border-amber-400 ",
  "border-emerald-400 ",
];

const NosProduits = ({ onNavigate }) => {
  return (
    <div className="container py-10">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-secondary mb-10">
        NOS PRODUITS
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, index) => (
          <div
            key={p.id}
            className={`rounded-3xl border-2 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer ${colorClasses[index % colorClasses.length]}`}
            onClick={() => onNavigate("products", p.id)}
          >
            <h2 className="text-xl font-bold mb-2 text-ColorForText dark:text-white">
              {p.name}
            </h2>
            <p className="text-sm text-ColorForText/80 dark:text-white leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
            <div className="mt-16 flex justify-center">
                <img
                src="images\image2.png"
                alt="Illustration"
                className=" max-w-[200px] max-h-[250px]"
                />
            </div>
               <div className="mt-16 flex justify-center">

                <img
                src="images\image3.png"
                alt="Illustration"
                className=" max-w-[200px] max-h-[250px]"
                />
            </div>
      </div>

      {/* Illustration area */}
      
    </div>
  );
};

export default NosProduits;
