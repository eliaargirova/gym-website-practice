import { useNavigate } from 'react-router-dom';
import { SelectedPage } from "@/shared/types";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const AboutLink = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const navigate = useNavigate();
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    const handleClick = () => {
        setSelectedPage(lowerCasePage as SelectedPage);
        if (page === "About Me") {
            navigate("/about-me"); // Assuming "/about-me" is the route for the About Me page
        }
    }

    return (
        <a
            className={`${selectedPage === lowerCasePage} ? "text-primary-500" : ""
            transition duration-500 hover:text-primary-300
            `}
            onClick={handleClick}
        >
            {page}
        </a>
    )
}

export default AboutLink;