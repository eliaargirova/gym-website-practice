import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
}

const ActionButton = ({ children, onClick }: Props) => {
  return (
//children represents what should be inside the button
    <button
    className = "rounded-md bg-secondary-500 px-10 py-2 border-2 border-black hover:bg-primary-500 hover:text-white mt-11 sm:mt-5 "
    onClick={onClick}
    >
        {children} 
    </button>
  )
}

export default ActionButton