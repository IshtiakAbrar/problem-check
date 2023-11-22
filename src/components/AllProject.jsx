import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const AllProject = () => {

    let [jsonData,setJsonData]=useState([]);
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/data.json");
                const data = await res.json();
                setJsonData(data['project']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    return (
        <div>
            <div className=" justify-center w-full h-auto overflow-hidden mt-[2rem] mb-[5rem] p-28">

                <div className=" w-[25rem] leading-10">
                    <p className="text-green-600">All Project</p>
                    <h1 className="text-5xl"><b>Better Agency/SEO Solution At Your Fingertips</b></h1>
                </div>

                <div className=" w-auto h-auto grid  grid-rows-2 grid-cols-2 mt-[5rem] gap-8">

                    {jsonData.map((item,i)=>{
                        return <div key={i} className="card  w-auto bg-base-100 shadow-2xl gap-6"><Link to={"#"}>
                            <figure className="rounded-3xl "><img className="p-[2rem] w-full" src={item['img']} alt="Shoes"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-5xl">{item['name']}</h2>
                            </div></Link>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
};

export default AllProject;