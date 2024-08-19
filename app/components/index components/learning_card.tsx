import React from "react";
import Image from "next/legacy/image";
import LanguageTexts from "./SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./SwitchMode/modeSwitcher/modeSwitcher";

const Learning_card = () => {
  const { mode } = useMode();
  const { textMain, textSecondary, study } = Colors[mode].text;
  const { bg, main, borderSecondary, overlap, bgSecondary } = Colors[mode].color;

  const { language } = useLanguage();
  const {
    title,
    span1,
    span2,
    span3,
    span4,
    span5,
    span6,
    span7,
    span8,
    span9,
    span10,
  } = LanguageTexts[language].learning_card;

  return (
    <div
      className={`w-4/5 md:w-2/3 xl:w-2/5 xl:mt-0 xl:mx-6 mx-auto px-10 pt-2 pb-10 mt-10 ${overlap} border-2 ${borderSecondary} rounded-md`}
    >
      <div className={`w-16 h-16 border-2  mx-auto my-5 rounded-full shadow-2xl ${borderSecondary} ${bgSecondary} bg-opacity-90 relative lg:w-24 lg:h-24`}>
        <Image
          src={study}
          alt="Front end Icon"
          layout="fill"
          objectFit="cover"
          sizes="(min-width: 640px) 24vw, 100vw"
        />
      </div>

      <h2
        className={`flex justify-center text-xl mb-5 font-medium md:text-2xl ${textMain} lg:text-3xl`}
      >
        {title}
      </h2>

      <div className={`md:text-xl  lg:text-2xl ${textMain}`}>
        <span> {span1} </span>

        <span className="font-semibold">{span2}</span>

        <span>{span3}</span>

        <span className="font-semibold"> {span4}</span>

        <span className="font-semibold">{span5}</span>

        <span> {span6}</span>

        <span className="font-semibold">{span7}</span>

        <span className="font-semibold">{span8}</span>

        <span>{span9}</span>

        <span className={`${textSecondary} font-bold`}>{span10}</span>
      </div>
    </div>
  );
};

export default Learning_card;
