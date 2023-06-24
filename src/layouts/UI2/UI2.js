import React from "react";

const UI2 = () => {
  return (
    <section className="py-12">
      <div className="w-full lg:w-1/2 xl:w-1/3">
        <h1 className="mb-1 text-base font-semibold text-indigo-400">
          Our track record
        </h1>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Trusted by thousands of developers worldwide
        </h2>
        <p className="text-lg text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien
          eget mi proin sed libero.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-l-2 border-gray-800 px-5">
          <h3 className="mb-2 text-2xl font-bold">8,000+</h3>
          <small className="text-slate-300">Developers on the platform</small>
        </div>
        <div className="border-l-2 border-gray-800 px-5">
          <h3 className="mb-2 text-2xl font-bold">900m+</h3>
          <small className="text-slate-300">Daily requests</small>
        </div>
        <div className="border-l-2 border-gray-800 px-5">
          <h3 className="mb-2 text-2xl font-bold">99.9%</h3>
          <small className="text-slate-300">Uptime guarantee</small>
        </div>
        <div className="border-l-2 border-gray-800 px-5">
          <h3 className="mb-2 text-2xl font-bold">12m</h3>
          <small className="text-slate-300">Projects deployed</small>
        </div>
      </div>
    </section>
  );
};

export default UI2;
