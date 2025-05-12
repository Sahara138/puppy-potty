import GlobalContainer from "@/components/globalcontainer";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

import Google_PlayStore from "@/assets/svg/google-playstore.svg";
import AppStore from "@/assets/svg/available-on-the-app-store.svg";

import DownloadScreen1 from "@/assets/images/iPhoneScreen1.png";
import DownloadScreen2 from "@/assets/images/iPhoneScreen2.png";
const DownloadApp = () => {
  let animationControlFirst = useAnimation();
  let animationControlSecond = useAnimation();
  const Animation = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    const handleScrollFirst = () => {
      const scrollY = window.scrollY;
      animationControlFirst.start({
        scale: 1 + scrollY / 42000,
        rotate: 1 - scrollY / 500,
        transition: {
          // ease: "easeInOut",
          duration: 0.5,
          ease: [0.25, 1, 0.5, 1],
        },
      });
    };
    const handleScrollSecond = () => {
      const scrollY = window.scrollY;
      animationControlSecond.start({
        scale: 1 + scrollY / 42000,
        rotate: -(1 - scrollY / 500),
        transition: {
          // ease: "easeInOut",
          duration: 0.5,
          ease: [0.25, 1, 0.5, 1],
        },
      });
    };
    window.addEventListener("scroll", handleScrollFirst);
    window.addEventListener("scroll", handleScrollSecond);

    return () => {
      window.removeEventListener("scroll", handleScrollFirst);
      window.removeEventListener("scroll", handleScrollSecond);
    };
  }, []);
  return (
    <GlobalContainer>
      <section className="mt-[130px]">
        <div className="grid grid-cols-2 justify-between">
          <div>
            <h4 className="font-poppins text-[55px] font-medium leading-[85px] capitalize text-black-04 max-w-[516px]">
              One Mobile App For Your Lovely Pet
            </h4>
            <p className="mt-[17px] font-poppins text-[19px] font-normal leading-[34px] text-black-04 max-w-[554px]">
              Lorem ipsum dolor sit amet consectetur. Magna dictumst mattis
              tempus ac dignissim ultricies. Sodales tellus egestas ac viverra
              mauris enim bibendum commodo aliquam. Elementum et est semper
              faucibus imperdiet urna at sagittis. Nunc sit pellentesque in odio
              ultrices volutpat nunc nec lacus. Sed orci faucibus.
            </p>
            <div className="mt-[64px]">
              <h5 className="font-poppins text-[30px] font-semibold leading-[34px] capitalize text-black-04">
                Download The App
              </h5>
              <div className="mt-[51px]">
                <Button
                  size="0"
                  className="bg-[#ffffff] hover:bg-[#ffffff] drop-shadow-[#00000024] rounded-full mr-[28px] shadow-2xl"
                >
                  <img
                    className="py-[10px] px-[46px]"
                    src={Google_PlayStore}
                    alt="google-play-store"
                  />
                </Button>
                <Button
                  size="0"
                  className="bg-[#ffffff] hover:bg-[#ffffff] drop-shadow-[#00000024] rounded-full shadow-2xl"
                >
                  <img
                    className="py-[10px] px-[55px]"
                    src={AppStore}
                    alt="app-store"
                  />
                </Button>
              </div>
            </div>
          </div>
          <motion.div 
                initial="hidden"
              whileInView="visible"
              variants={Animation}
              viewport={{ once: true }} 
              className="relative h-full"
              transition={{
                staggerChildren: 0.2,
                duration: 0.5,
                ease: "easeInOut",
              }}
              >
            <motion.div
            animate={animationControlFirst}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
              
              className="absolute -top-3 right-44 w-[300px]"
              
            >
                <img
                  className="w-full h-full"
                  src={DownloadScreen1}
                  alt="download-screen-1"
                />
            </motion.div>
            <motion.div
              animate={animationControlSecond}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="absolute top-5 right-0 w-[300px]"
            >
                <img
                  className="w-full h-full"
                  src={DownloadScreen2}
                  alt="download-screen-2"
                />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </GlobalContainer>
  );
};

export default DownloadApp;
