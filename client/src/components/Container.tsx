import { ReactNode } from "react"


interface Props {
    children: ReactNode;
    className?: string;
}

export const Container = (
    {children, className}: Props
) => {
  return (
    <div className={`max-w-[77.5rem] mx-auto 
                      px-5 md:px-10 lg:px-15 
                      xl:max-w-[97.5rem] 
                      ${className}`}
    >
        {children}
    </div>
  )
}