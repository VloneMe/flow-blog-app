import { ReactNode, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";



interface Props {
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    id?: string;
    icon: ReactNode;
}

export const Input = (
    { name, type, placeholder, value, id, icon }: Props
) => {

    const [show, setShow] = useState(false);
  return (
    <div className="relative w-full mb-4"
    >
        <input  type={
            type == "password" ? show ? "text" : 'password' : type
        }
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                id={id}
                className="input-box outline-dark-grey"
        />

        <div className="size-5 input-icon flex items-center"
        >
            {icon}
        </div>

        { type == "password" &&
            (<div onClick={() => setShow(!show)} className="size-5 input-icon flex items-center left-auto right-4 cursor-pointer"
            >
                {
                    type == "password" && !show ?
                    <FaRegEyeSlash />
                    : <FaRegEye />
                }
            </div>)
        }
    </div>
  )
}
