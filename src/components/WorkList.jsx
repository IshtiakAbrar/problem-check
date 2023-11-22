import React, {useEffect, useState} from 'react';

const WorkList = () => {

    let [jsonData,setJsonData]=useState([]);
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/data.json");
                const data = await res.json();
                setJsonData(data['work']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    return (
        <div>
            <div className="mt-[8rem]">
                <h1 className="text-11xl px-[7rem] font-bold w-[45rem]">We provide the Perfect Solution to your business growth</h1>
            </div>
            <div className=" px-[7rem] py-[6rem] flex justify-between">
                {jsonData.map((item,i)=>{
                    return <div  key={i} className="card w-[26rem] ">
                                <figure className="px-[2.2rem] w-fit"><img src={item['img']} alt="pic" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item['title']}</h2>
                                    <p>{item['description']}</p>
                                    <div className="card-actions justify-items-stretch mt-[2rem]">
                                        <button className="btn btn-success bg-white shadow-none text-black border-none">{item['btn']}
                                            <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    })

                    }
            </div>
        </div>
    );
};

export default WorkList;