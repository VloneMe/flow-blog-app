import { Input } from "../components/Input"

import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
    type?: string
}

export const UserAuthForm = (
    { type }: Props
) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center"
    >
        <form className={`w-[80%] max-w-[500px] border border-dark-grey rounded-lg px-4 py-8 
                        ${type != "sign-in" ? "mt-20" : ""}`}
        >
            <h1 className="text-4xl capitalize text-center font-serif mb-10">
                {type == "sign-in" ? "Welcome back" : "Join The Flow"}
            </h1>

            {
                type != "sign-in" ? (   
                    <Input  type="text"
                            name="fullname"
                            placeholder="Full name"
                            icon={<IoPersonOutline />}
                    />
                ) : ""
            }

            <Input  type="email"
                    name="email"
                    placeholder="Email"
                    icon={<MdOutlineMail />}
            />

            <Input  type="password"
                    name="password"
                    placeholder="Password"
                    icon={<RiLockPasswordLine />}
            />

            {
                type != 'sign-in' &&
                (
                    <Input  type="password"
                            name="confirm-pwd"
                            placeholder="Confirm password"
                            icon={<RiLockPasswordLine />}
                    />
                )
            }

            <button type="submit" 
                    className="btn-dark w-full mt-7 center"
            >
                {type?.replace("-", " ")}
            </button>

            <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold"
            >
                <hr className="w-1/2 border-black"/>
                <p className="">or</p>
                <hr className="w-1/2 border-black"/>
            </div>

            <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center"
            >
                <FaGoogle /> Continue With Google
            </button>

            {
                type == "sign-in" ? 
                (
                    <p className="mt-6 text-dark-grey text-xl text-center"
                    >
                        Don't have an Account? 
                        <Link to="/sign-up"
                                className="underline text-black text-xl ml-1"
                        >
                            Join Us
                        </Link>
                    </p>
                ) :
                (
                    <p className="mt-6 text-dark-grey text-xl text-center"
                    >
                        Don't have an Account? 
                        <Link to="/sign-in"
                                className="underline text-black text-xl ml-1"
                        >
                            Sign in
                        </Link>
                    </p>
                )
            }
        </form>     
    </section>
  )
}