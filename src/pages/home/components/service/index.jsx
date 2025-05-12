import GlobalContainer from "@/components/globalcontainer";
import React from "react";
import { serviceData } from "./serviceData";
import ServiceCard from "./cards";

const Service = () => {
  return (
    <GlobalContainer>
      <div className="grid grid-cols-3 gap-x-[30px] mt-[177px] ">
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

      </div>
    </GlobalContainer>
  );
};

export default Service;
