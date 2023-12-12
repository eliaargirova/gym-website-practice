import useMediaQuery from "@/hooks/useMediaQuery";
import AboutMePersonGraphic from "@/assets/about-me-person.jpg";

type Props = {}

const AboutMe = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="aboutme" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">

      </section>
  )
}

export default AboutMe