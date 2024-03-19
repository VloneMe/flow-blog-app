import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const  Search = () => {

  const [show, setShow] = useState(false);
  return (
    <div className="relative bg-white left-0 top-full mt-0.5 border border-gray-500 px-[1rem] flex items-center lg:w-auto rounded-lg h-[40px] w-full"
    >
        <input  type="text"
                placeholder="Search ..."
                className={`w-fit h-fit justify-start outline-none border-l-2 border-gray-400 placeholder:pl- pl-2 ${show ? 'block' : 'false'}`}
        />

        <IoSearchOutline onClick={() => setShow(true)} 
                      className="size-5 justify-end w-full"
        />
    </div>
  )
}
