import ServicesButton from "@/shared/ServicesButton"
import { useState } from "react";
import WomanLifting from "@/assets/woman-lifting.jpg"
import WomanBoxing from "@/assets/woman-boxing.jpg"
import WomanAtGymLifting from "@/assets/woman-at-gym-lifting-weights.jpg"
import HiitTraining from "@/assets/hiit-training.jpg"
import StrongWoman from "@/assets/strong-woman.jpg"
import MuscularFitnessModel from "@/assets/muscular-fitness-model.jpg"


type Props = {}

const Classes = (props: Props) => {

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const handleServiceClick = (service: string) => {
    console.log("Service clicked:", service);
    setSelectedService(service);
  };

  return (
    <div className="mt-[70px]">
      <div className="flex flex-col sm:flex-row justify-center md:gap-10 sm:mt-12  mb-12 sm:gap-10">
        <ServicesButton onClick={() => handleServiceClick('Boxing')}>Boxing</ServicesButton>
        <ServicesButton onClick={() => handleServiceClick('Weight Lifting')}>Weight Lifting</ServicesButton>
        <ServicesButton onClick={() => handleServiceClick('Nutrition')}>Nutrition</ServicesButton>
      </div>

      <div className="service-content">
        {selectedService === 'Boxing' && 
        <div className="mb-[600px]">
        <div className="w-fi;; max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
          <img src={WomanLifting} alt="woman-at-gym-lifting-weigths" className="rounded-lg"/>
          <img src={WomanAtGymLifting} alt="woman-lifting-weigths" className="rounded-lg"/>
          <img src={WomanBoxing} alt="woman-boxing" className="rounded-lg"/>
          <img src={HiitTraining} alt="hiit-training" className="rounded-lg"/>
          <img src={StrongWoman} alt="strong-woman" className="rounded-lg"/>
          <img src={MuscularFitnessModel} alt="muscular-fitness-model" className="rounded-lg"/>
          </div>

          <div className="">
          <h1 className="font-bold text-[50px] mb-10"> What does a typical class look like? </h1>

          <div className="w-full bg-black h-[2px] my-8"></div>
          <p>
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
          </p>
          </div>

          
          </div>
          
          
          
          
          }
        {selectedService === 'Weight Lifting' && <div>Content for Weight Lifting</div>}
        {selectedService === 'Nutrition' && <div>Content for Nutrition</div>}
      </div>
    </div>
  )
}

export default Classes