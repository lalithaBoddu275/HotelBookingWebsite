import React, { useState } from "react";
import { assets } from "../assets/assets";
import Title from './Title'
const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }
    alert(`Subscribed successfully with: ${email}`);
    setEmail(""); // Clear input after subscribing
  };

  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-12 bg-gray-900 text-white">
        <Title title='stay Inspired' subTitle='Join our newletter and be the first to discover new destinations,exclusive offers,and travel inspiration.'/>

      {/* Input and button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full md:w-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full md:w-72"
          placeholder="Enter your email"
        />
        <button
          onClick={handleSubscribe}
          className="flex items-center justify-center gap-2 group bg-black px-6 md:px-7 py-2.5 rounded active:scale-95 transition-all"
        >
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow icon"
            className="w-3.5 invert group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-gray-300">
          Privacy Policy
        </a>{" "}
        and consent to receive updates.
      </p>
    </div>
  );
};

export default NewsLetter;
