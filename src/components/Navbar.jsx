import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let list=["Home", "Team", "Service", "Projects", "Testimonials"]
    return (
        <div>

        <div className={`${props.position} absolute left-[0px] w-full h-20
            flex flex-row items-center justify-between py-[5px] px-[100px] box-border text-black min-w-full`}> {/*min width full screen*/}

            <div className="flex flex-row items-start justify-start p-2.5">
                <b className="relative">
                    <span>Design</span>
                    <span className="text-orangered">AGENCY</span>
                </b>
            </div>

            <div className="flex flex-row items-center justify-center gap-[30px] text-base showActive">
                {list.map((item,index)=>{
                    return( //conditional rendering to avoid extra path ('/home'). now home =('/')
                        <NavLink to={item==="Home"?('/'):(`/${item}`)} key={index} className=" no-underline text-black">
                            <div  className="flex flex-row items-center justify-center p-2.5 gap-[10px]">
                                <div className="relative font-medium">{item}</div>

                            </div>
                        </NavLink>)
                })}

                    <button className="btn btn-outline text-black w-[105px] gap-[10px] border-solid border-mediumseagreen">Login</button>

                    <button className="btn bg-mediumseagreen w-[105px] gap-[10px] text-white border-0">Register</button>


            </div>


        </div>
        </div>

    );
};

export default Navbar;