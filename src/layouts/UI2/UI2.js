import React from 'react';

const UI2 = () => {
    return (
        <section className="py-12">
            <div className="lg:w-1/2 w-full xl:w-1/3">
                <h1 className="text-base text-indigo-400 font-semibold mb-1">
                    Our track record
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Trusted by thousands of developers worldwide
                </h2>
                <p className="text-lg text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="border-l-2 px-5 border-gray-800">
                    <h3 className="text-2xl font-bold mb-2">
                        8,000+
                    </h3>
                    <small className="text-slate-300">
                        Developers on the platform
                    </small>
                </div>
                <div className="border-l-2 px-5 border-gray-800">
                    <h3 className="text-2xl font-bold mb-2">
                        900m+
                    </h3>
                    <small className="text-slate-300">
                        Daily requests
                    </small>
                </div>
                <div className="border-l-2 px-5 border-gray-800">
                    <h3 className="text-2xl font-bold mb-2">
                        99.9%
                    </h3>
                    <small className="text-slate-300">
                        Uptime guarantee
                    </small>
                </div>
                <div className="border-l-2 px-5 border-gray-800">
                    <h3 className="text-2xl font-bold mb-2">
                        12m
                    </h3>
                    <small className="text-slate-300">
                        Projects deployed
                    </small>
                </div>
            </div>
        </section>
    );
};

export default UI2;
