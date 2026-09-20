import React, { useEffect, useState } from "react";
import productsData from "../data/products.json";

const ProductPage = ({ productId = 5 }) => {
  const [product, setProduct] = useState(null);

useEffect(() => {
  const selected = productsData.find((item) => item.id === Number(productId));
  setProduct(selected);
}, [productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 dark:text-gray-300">Chargement du produit...</p>
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary">{product.name}</h1>

          {/* Caractéristiques */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Caractéristiques
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {product.description}
            </p>
          </div>

          {/* Composition */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Composition
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>N : {product.composition.N}</li>
              <li>P₂O₅ : {product.composition.P2O5}</li>
              <li>K₂O : {product.composition.K2O}</li>
            </ul>
          </div>
          {product.granulometry && (
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Granulométrie
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {product.granulometry}
              </p>
            </div>
          )}

          {/* Utilisation */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Utilisation
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {product.usage}
            </p>
          </div>

          {/* Table */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Domaines d’Application
            </h2>
            <table className="w-full text-left border-collapse text-gray-700 dark:text-gray-300 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/20">
                  <th className="p-2">Culture</th>
                  <th className="p-2">Doses (Qx/Ha)</th>
                </tr>
              </thead>
              <tbody>
                {product.applications.map((app, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "" : "bg-gray-50 dark:bg-gray-800"}
                  >
                    <td className="p-2">{app.culture}</td>
                    <td className="p-2">{app.dose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        {/* <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div> */}
      </div>

      {/* FOOTER TEXT */}
      <div className="mt-16 border-t-4 border-primary/30 pt-8 text-center text-gray-600 dark:text-gray-400">
        <p>{product.footerNote}</p>
      </div>
    </section>
  );
};

export default ProductPage;
