import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const FeaturedProject = () => {
    let[jsonData,setJsonData]=useState([]);
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/data.json");
                const data = await res.json();
                setJsonData(data['featured']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    return (
        <div className="[background-color:#F0FDF4] pt-[25px]">
            <div className="mt-[8rem]">
                <h1 className="text-11xl px-[7rem] font-bold w-[45rem]">We provide the Perfect Solution to your business growth</h1>
            </div>



            <div className=" px-[7rem] py-[6rem] grid grid-rows-2 grid-cols-4 gap-8 ">


                {jsonData.map((item,i)=>{
                    return <>
                        {
                            item['id']===1?(<div key={i} className="card row-span-2 col-span-2 "><Link to={"#"}> {/*First element containing 40% width*/}
                                                <figure>
                                                    <img src={item['img']} alt="Shoes" className="rounded-xl w-full" />
                                                </figure>
                                                <div className="card-body pl-0 ">
                                                    <p>{item['description']}</p>
                                                    <h2 className="card-title">{item['title']}</h2>

                                                </div></Link>
                                            </div>)

                        :

                        (
                            <div  key={i} className="card row-span-1 col-span-1 "><Link to={"#"}>
                                <figure>
                                    <img src={item['img']} alt="Shoes" className="rounded-xl w-full" />
                                </figure>
                        <div className="card-body pl-0">
                            <p>{item['description']}</p>
                            <h2 className="card-title">{item['title']}</h2>

                        </div></Link>
                            </div>)
                        }
                    </>
                })

                }

            </div>
        </div>
    );
};

export default FeaturedProject;