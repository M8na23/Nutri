import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const PrivacyPolicy = () => {

  const element = document.documentElement;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      <main className="flex-1 flex justify-center p-6">
        <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-ColorForText dark:text-white text-center">
            Politique de Confidentialité
          </h1>

          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Votre confidentialité est importante pour nous. Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web ou nos services.
          </p>

          <h2 className="text-xl font-semibold text-ColorForText dark:text-white">
            Informations que Nous Collectons
          </h2>
          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Nous pouvons collecter des informations personnelles telles que votre nom, votre adresse e-mail, votre numéro de téléphone, ainsi que toute information que vous nous fournissez lorsque vous nous contactez ou vous abonnez à notre newsletter.
          </p>

          <h2 className="text-xl font-semibold text-ColorForText dark:text-white">
            Comment Nous Utilisons Vos Informations
          </h2>
          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Les informations que nous collectons sont utilisées pour fournir et améliorer nos services, communiquer avec vous, et vous garantir une expérience personnalisée.
          </p>

          <h2 className="text-xl font-semibold text-ColorForText dark:text-white">
            Sécurité des Données
          </h2>
          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Nous appliquons des mesures de sécurité appropriées pour protéger vos informations contre tout accès, modification, divulgation ou destruction non autorisés.
          </p>

          <h2 className="text-xl font-semibold text-ColorForText dark:text-white">
            Services Tiers
          </h2>
          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Nous ne vendons pas vos informations. Nous pouvons utiliser des services tiers de confiance pour nous aider à exploiter le site et fournir nos services, lesquels sont tenus à la confidentialité.
          </p>

          <h2 className="text-xl font-semibold text-ColorForText dark:text-white">
            Modifications de Cette Politique
          </h2>
          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous vous encourageons à consulter cette page périodiquement pour prendre connaissance des éventuels changements.
          </p>

          <h2 className="text-xl font-semibold text-ColorForText dark:text-white">
            Contactez-nous
          </h2>
          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
