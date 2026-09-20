import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const AboutUs = () => {

  const element = document.documentElement;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      <main className="flex-1 flex justify-center p-6">
        <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 space-y-6">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-ColorForText dark:text-white text-center mb-6">
            À propos de NutriPhat
          </h1>

          {/* Content */}
          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            NutriPhat – L'excellence au service de l'agriculture. Depuis plusieurs années, NutriPhat se consacre entièrement au secteur agricole et s'impose aujourd'hui comme un partenaire incontournable, alliant qualité, performance, proximité et écoute — des valeurs qui guident chacune de nos actions.
          </p>

          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Consciente des exigences des agriculteurs et de l'évolution constante du secteur, NutriPhat met à votre service tout son savoir-faire et son expérience afin de vous accompagner sur le chemin de la réussite et de la qualité durable.
          </p>

          <h2 className="text-xl font-semibold text-ColorForText dark:text-white">
            Pourquoi choisir nos engrais ?
          </h2>

          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Lorsqu'on cultive la terre, certaines substances nutritives s'appauvrissent car les plantes les utilisent pour leur croissance. Il est donc essentiel de compenser ces pertes afin de préserver le potentiel du sol et d’assurer une production équilibrée et rentable.
          </p>

          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Les éléments les plus souvent déficients dans les sols cultivés sont : l’azote (N), le phosphore (P), le potassium (K), ainsi que le calcium, le magnésium et divers oligoéléments.
          </p>

          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Consciente de cette réalité, NutriPhat conçoit des formules adaptées à chaque type de culture, basées sur les analyses de sol et les besoins spécifiques des exploitations agricoles.
          </p>

          <p className="text-ColorForText dark:text-gray-200 leading-relaxed">
            Nos engrais allient qualité supérieure et prix accessibles afin d’offrir à chaque agriculteur une fertilisation performante, durable et équilibrée.
          </p>

          <p className="text-ColorForText dark:text-gray-200 leading-relaxed font-semibold">
            NutriPhat — La qualité de vos récoltes dépend de la qualité de nos engrais.
          </p>

        </div>
      </main>
    </div>
  );
};

export default AboutUs;
