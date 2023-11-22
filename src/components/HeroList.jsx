import React from 'react';
import {Link} from "react-router-dom";

const HeroList = () => {
    return (
        <div>

            <div className="[background:linear-gradient(180deg,_#d7f5dc,_#d7f5dc)] w-full h-[947px] overflow-hidden text-[50px] text-black">

                <div className="flex justify-between pb-[40px] mt-20"> {/* Middle part*/}
                    <div className=" py-[120px] px-[102px] inline-block items-start justify-center gap-[50px]">
                        <div className="flex flex-col items-start justify-start gap-[10px]">
                            <b className="leading-[65px] inline-block w-[550px]">
                                Increase Your Customers Loyalty and Satisfaction
                            </b>
                            <div className="text-xl font-medium font-avenir inline-block w-[472px]">
                                We help businesses like yours earn more customers, standout from
                                competitors, make more money
                            </div>
                        </div>

                            <button className="btn bg-mediumseagreen py-5 px-[30px] btn-lg rounded-2xl text-xl text-white ">Get started</button>
                    </div>
                    <div className="relative  w-[606px] h-[457px] right-[100px] top-[90px]">
                        <Link to={"#"}><img
                            className=" absolute top-[0px] left-[0px] rounded-3xs w-[408px] h-[271px] object-cover"
                            alt=""
                            src="/database/heroList1.png"
                        /></Link>
                            <Link to={"#"}><img
                            className="absolute top-[0px] left-[426px] rounded-3xs w-[180px] h-[271px] object-cover"
                            alt=""
                            src="/database/heroList2.png"
                        /></Link>
                                <Link to={"#"}><img
                            className="absolute top-[293px] left-[0px] rounded-3xs w-[246px] h-[164px] object-cover"
                            alt=""
                            src="/database/heroList3.png"
                        /></Link>
                                    <Link to={"#"}><img
                            className="absolute top-[293px] left-[261px] rounded-3xs w-[345px] h-[164px] object-cover"
                            alt=""
                            src="/database/heroList4.png"
                        /></Link>

                    </div>
                </div>

                <div className=" mt-[50px] left-[0px] w-full h-[120px] overflow-hidden [background:#F8FFF9] flex flex-row items-center justify-between  px-[100px]">
                    <Link to={"#"}><img

                        alt=""
                        src="/database/google.png"
                    /></Link>
                    <Link to={"#"}><img

                        alt=""
                        src="/database/trello.png"
                    /></Link>
                    <Link to={"#"}><img

                        alt=""
                        src="/database/monday.png"
                    /></Link>
                    <Link to={"#"}> <img

                        alt=""
                        src="/database/notion.png"
                    /></Link>

                    <Link to={"#"}><img

                        alt=""
                        src="/database/slack.png"
                    /></Link>

                </div>


            </div>
        </div>
    );
};

export default HeroList;