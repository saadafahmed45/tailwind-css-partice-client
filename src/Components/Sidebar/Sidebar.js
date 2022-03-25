import React, { useState } from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillControl } from "react-icons/ai";
import Card from '../Home/Card/Card';

const Sidebar = () => {

    const [open, setOpen] = useState(true);


    const menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "inbox", src: "chat", gap: true },
        { title: "Account", src: "user" },
        { title: "Account", src: "user" },
        { title: "Search", src: "Search", gap: true },
        { title: "Account", src: "user" },

    ]


    //  link https://www.youtube.com/watch?v=aMjou4yXWdU
    // https://www.youtube.com/watch?v=9wIO5ItG9CI
    return (
        <div className="flex">
            <div className={`${open ? "w-60" : "w-20"} duration-300 h-screen bg-dark-purple relative`}>
                <span className={`absolute cursor-pointer rounded-full -right-4 top-9 w-8 border-2 bg-light-white border-dark-purple color:#fff  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                >   <AiFillCaretLeft /></span>
                <div className="nemu__item flex gap-x-4 items-center p-5 pt-8">

                    <span className={`text-3xl	bg-purple-300	rounded p-1 border-2 border-gray-500 curson-pointer duration-500`}> <AiFillDashboard /></span>


                    <h1 className={`text-white origin-left font-medium text-xl duration-300  ${!open && "scale-0"}`}>Desinger</h1>

                </div>
                <ul className="pt-2 ml-2">
                    {menus.map((menu, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer   p-2 hover:bg-light-white  rounded"  >
                            <span className={`text-3xl	bg-emerald-600	rounded p-1 border-2 border-gray-500 curson-pointer duration-500`} > <AiFillControl /></span>
                            <span className={`text-white origin-left font-medium text-md duration-300  ${!open && "scale-0"}  `}> {menu.title}</span>
                        </li>


                    ))}
                </ul>
            </div>
            <div className="p-7 text-2xl font-semibold">
                <h1>Home Page</h1>
                <Card />
            </div>

        </div>

    );
};

export default Sidebar;