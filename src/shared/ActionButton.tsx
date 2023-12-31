import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
//children represents what should be inside the button
    <AnchorLink
    className = "rounded-md text-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 border-2 border-black  hover:text-white "
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children} 
    </AnchorLink>
  )
}

export default ActionButton