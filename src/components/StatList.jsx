import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const StatList = () => {
    let[jsonData,setJsonData]=useState([]);
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/data.json");
                const data = await res.json();
                setJsonData(data['stat']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    return (
        <div  className="px-[7rem] py-[6rem] mt-[5rem] flex justify-between">
            {jsonData.map((item,i)=>{

                return <Link to={"#"}><div key={i} className="card w-96 bg-base-100 shadow-xl py-[2rem]">
                    <figure className="px-10 pt-10">
                        <img src={item['img']} alt="img" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl">{item['count']}</h2>
                        <p className="text-base">{item['description']}</p>
                    </div>
                </div></Link>


            })}
            
        </div>
    );
};

export default StatList;