import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient text-primary 
      outline-none font-poppins font-medium text-[18px] ${styles}`}
    >
      Get Started
    </button>
  );
}

export default Button;
