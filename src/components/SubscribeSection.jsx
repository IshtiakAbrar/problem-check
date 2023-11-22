import React from 'react';

const SubscribeSection = () => {
    return (
        <div>
            <div className="hero h-auto p-28">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <p className="text-green-600 pb-6">SUBSCRIBE</p>
                        <h1 className="text-11xl px-[7rem] font-bold">Subscribe To Get The Latest News About Us</h1>

                        <p className="py-6 text-base opacity-75">Please drop your email below to get daily update about what we do</p>

                        <div className="border border-black border-opacity-100 rounded-2xl p-2 flex">
                            <input type="text" placeholder="Enter your Email address " className="input border-none w-full max-w-xl focus:outline-none" />
                            <button className="btn btn-primary bg-orangered  border-none text-white text-base">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;