import GlobalContainer from "@/components/globalcontainer";
import React from "react";
import { serviceData } from "./serviceData";
import ServiceCard from "./cards";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <GlobalContainer>
      <motion.section
      initial={{opacity:0,y:50}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.3}}
       viewport={{once:true}} 
       className="grid grid-cols-3 gap-x-[30px] mt-[177px] ">
        {serviceData.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          );
        })}

      </motion.section>
    </GlobalContainer>
  );
};

export default Service;
