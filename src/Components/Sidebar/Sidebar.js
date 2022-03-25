import React, { useState } from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import Card from '../Home/Card/Card';

const Sidebar = () => {

const [open, setOpen] = useState(true);

//  link https://www.youtube.com/watch?v=aMjou4yXWdU

    return (
        <div className="flex">
            <div className={`${open ? "w-60" : "w-20" } duration-300 h-screen bg-dark-purple relative`}>
              <span className={`absolute cursor-pointer rounded-full -right-4 top-9 w-8 border-2 bg-light-white border-dark-purple color:#fff  ${!open && "rotate-180"}`}  
              onClick={()=> setOpen(!open)}
              >   <AiFillCaretLeft/></span>
            </div>
<div className="p-7 text-2xl font-semibold">
<h1>Home Page</h1>
<Card/>
</div>

        </div>

    );
};

export default Sidebar;