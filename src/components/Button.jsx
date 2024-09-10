// import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="mx-auto px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
      <p>{text}</p>
    </button>
  );
};

export default Button;
