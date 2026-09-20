import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pjha2b4", // replace with your EmailJS service ID
        "template_hztznpe", // replace with your template ID
        formRef.current,
        "97gU5mFLYPhtN8rMI" // replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
          e.target.reset(); // clear form after sending
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl space-y-8">
          <h1 className="text-3xl font-bold mb-6 text-ColorForText dark:text-white text-center">
            Contactez Nous
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <div>
                <label className="block mb-1 text-ColorForText dark:text-gray-200">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  required
                  className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label className="block mb-1 text-ColorForText dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label className="block mb-1 text-ColorForText dark:text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#55C593FF] to-[#55C593FF]/80 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
              >
                Envoyer
              </button>
            </form>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/contactUs (2).png`}
                alt="Contact Us"
                className="max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contactus;
