import React from 'react';

const ProjectHeader = () => {
    return (
        <div>

            <div className="w-full h-auto overflow-hidden px] bg-neutral-100 ">
                <div className="px-[7rem] w-full h-auto  mt-[12rem] ">

                    <h1 className="text-11xl"><b>All Project</b></h1>

                    <div className="text-base breadcrumbs pb-[3rem]">
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/projects"} className="text-green-600">All Project</a></li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProjectHeader;