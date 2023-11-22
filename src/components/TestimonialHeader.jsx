import React from 'react';

const TestimonialHeader = () => {
    return (
        <div>

            <div className="w-full h-auto overflow-hidden px] bg-neutral-100 ">
                <div className="px-[7rem] w-full h-auto  mt-[12rem] ">

                    <h1 className="text-11xl"><b>Testimonial List</b></h1>

                    <div className="text-base breadcrumbs pb-[3rem]">
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/testimonials"} className="text-green-600">Testimonial List</a></li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TestimonialHeader;