import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const AllService = () => {

    let [jsonData,setJsonData]=useState([]);
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/data.json");
                const data = await res.json();
                setJsonData(data['service']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    return (
        <div>
            <div className=" justify-center w-full h-auto overflow-hidden p-28 pt-16 ">
                <div className=" w-[25rem] leading-10">
                    <p className="text-green-600">Our All Services</p>
                    <h1 className="text-5xl"><b>We Provide Best Web Design Services</b></h1>
                </div>

                <div className="pt-[4rem] grid grid-rows-2 grid-cols-2 gap-10 ">

                    {jsonData.map((item,i)=>{
                        return <Link to={'#'}><div key={i} className="card w-auto row-span-1 col-span-1 p-8 bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title text-5xl">{item['title']}</h2>
                                <p className="opacity-50 pb-[1.4rem] pt-[1.1rem]">{item['description']}</p>
                            </div>
                            <div className="grid grid-rows-5 grid-cols-4 gap-6 ">

                                <img className="row-span-2 col-span-3 w-full h-full rounded-2xl" src={item['img1']} alt="Shoes"/>
                                <img className="row-span-2 col-span-1 w-full h-full rounded-2xl" src={item['img2']} alt="Shoes"/>
                                <img className="row-span-3 col-span-2 w-full h-full rounded-2xl" src={item['img3']} alt="Shoes"/>
                                <img className="row-span-3 col-span-2 w-full h-full rounded-2xl" src={item['img3']} alt="Shoes"/>


                            </div>

                        </div></Link>
                    })}
                </div>
            </div>

        </div>
    );
};

export default AllService;