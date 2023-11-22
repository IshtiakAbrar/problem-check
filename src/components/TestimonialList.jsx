import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const TestimonialList = () => {
    let [jsonData,setJsonData]=useState([]);
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/data.json");
                const data = await res.json();
                setJsonData(data['testimonial']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    return (
        <div>
            <div className=" justify-center w-full h-auto overflow-hidden mt-[5rem] mb-[5rem] p-28">

                <div className=" w-[25rem] leading-10">
                    <p className="text-green-600">Testimonial List</p>
                    <h1 className="text-5xl"><b>Better Agency/SEO Solution At Your Fingertips</b></h1>
                </div>

                <div className=" w-auto h-auto grid  grid-rows-2 grid-cols-3 mt-[5rem] gap-8">

                    {jsonData.map((item,i)=>{
                        return <div key={i} className="card  w-auto bg-base-100 shadow-2xl gap-6"> <Link to={"#"}>
                            <figure className="rounded-3xl pt-[4rem]"><img src={item['img']} alt="Shoes"/>
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className="opacity-50 pb-[2rem]">{item['description']}</p>
                                <h2 className="card-title text-5xl">{item['name']}</h2>
                                <p className="text-base">{item['prof']}</p>
                            </div></Link>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
};

export default TestimonialList;