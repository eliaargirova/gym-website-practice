import useMediaQuery from "@/hooks/useMediaQuery";
import AboutMePersonGraphic from "@/assets/aboutus-main-image.png";
import AboutMeMain from "@/assets/boxing-gym-main-about-me.jpg";
import HText from "@/shared/HText";
import SocialMediaIcons from "@/Components";
import AboutMeIcons from "@/Components/icons";
import { IconComponentType } from "@/shared/types";
import CardioIcon from "@/assets/skipping-rope.png"
import DietIcon from "@/assets/nutrition.png"
import DumbbellIcon from "@/assets/dumbbell.png"
import BoxingIcon from "@/assets/about-me-boxing.png"
import IconComonent from "@/Components/icons"
import ContactUs from "@/scenes/contactUs";
import ContactUsImage from "@/assets/personal-trainer-photo.jpg"


type Props = {}

const iconcomponent: Array<IconComponentType> = [
  {
    icon: <img src={BoxingIcon} className="h-12 w-12" />,
    title: "Boxing",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <img src={DietIcon} className="h-12 w-12" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <img src={DumbbellIcon} className="h-12 w-12" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const AboutMe = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (

    <section id="aboutme" className="mx-auto min-h-full w-5/6 py-20">
      <div className="relative">
        <div className="before:absolute after:-top-20 before:-left-20 before:z-[1]">
          <h1 className="xxxs:text-[40px] xxs:text-[70px] md:text-[100px] sm:text-[100px] xxs:leading-tight xxs:mb-2 xs:mb-2 font-bold
                ">
            More than just a {" "}
            <span className="text-primary-500">PT</span>
          </h1 >
        </div>

        {/* Only show photo on big screens */}

        {isAboveMediumScreens && (
          <img
            className="mt-4 w-full h-auto rounded-lg"
            alt="boxing-studio-main"
            src={AboutMeMain}
          />
        )}
        {/* Photo */}
      </div>
      <div className=" xxs:mt-5 mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img
          className="mx-auto w-[25rem] h-auto xxs:mb-[100px] xs:mb-[100px]"
          alt="benefits-page-graphic"
          src={AboutMePersonGraphic}
        />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <div
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </div>
            </div>
          </div>

          {/* DESCRIPT */}
          <div
          >
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in
              nulla nec. Consequat sed facilisis dui sit egestas ultrices
              tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
              Felis orci diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>

          {/* BUTTON */}
          <div className="relative mt-16">
            {/* <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-[2px] my-8"></div>
      <div
        className="mt-5 items-center justify-between gap-8 md:flex"
      >
        {iconcomponent.map((iconcomponent: IconComponentType) => (
          <IconComonent
            key={iconcomponent.title}
            icon={iconcomponent.icon}
            title={iconcomponent.title}
            description={iconcomponent.description}
          />
        ))}
      </div>

      <div className="w-full bg-black h-[2px] my-8 mb-12"></div>

      <div className=" xxs:mt-5 mt-16 items-center justify-between gap-20 md:mt-28 md:flex md:order-2">
        {/* GRAPHIC */}

        {/* DESCRIPTION */}
        <div className="md:order-1">
          {/* TITLE */}
          <div className="relative">
            <div className={`relative ${isAboveMediumScreens ? 'before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves' : ''}`}>
              <div
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </div>
            </div>
          </div>

          {/* DESCRIPT */}
          <div
          >
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in
              nulla nec. Consequat sed facilisis dui sit egestas ultrices
              tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
              Felis orci diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>

          {/* BUTTON */}
          <div className="relative mt-16">
            {/* <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div> */}
          </div>
        </div>
        <img
          className="mx-auto w-[25rem] h-auto xxs:mb-[100px] xs:mb-[100px] md:order-2"
          alt="benefits-page-graphic"
          src={AboutMePersonGraphic}
        />
      </div>
  
        <section id="contactus">
          <ContactUs imageSrc={ContactUsImage} />
        </section>




    </section>



  )
}

export default AboutMe