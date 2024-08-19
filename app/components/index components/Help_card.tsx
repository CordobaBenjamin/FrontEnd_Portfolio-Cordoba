import React from 'react'
import Image from "next/legacy/image";
import LanguageTexts from "./SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./SwitchMode/modeSwitcher/modeSwitcher";


const Help_card = () => {
  
  const {mode} = useMode()
  const {textMain, textSecondary, front} = Colors[mode].text;
  const {bg, main, border, borderSecondary, overlap, bgSecondary} = Colors[mode].color;


  const { language } = useLanguage();
  const {title, span1, span2, span3} = LanguageTexts[language].help_card;

  return (
    <>
      <div className={`w-4/5 md:w-2/3 xl:w-2/5 xl:mx-6 xl:mb-0 mx-auto px-10 pt-2 pb-10 mb-5 ${overlap}  border-2 ${borderSecondary} rounded-md`}>
              <div className={`w-16 h-16 border-2  mx-auto my-5 rounded-full shadow-2xl ${borderSecondary} ${bgSecondary} bg-opacity-90 relative lg:w-24 lg:h-24`}>
                <Image
                  src={front}
                  alt="Front end Icon"
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 640px) 24vw, 100vw"
                  className='p2'
                />
              </div>

              <h2 className={`flex justify-center text-xl mb-5 font-medium   md:text-2xl  lg:text-3xl ${textMain}`}>
                {title}
              </h2>

              <span className={`md:text-xl  lg:text-2xl ${textMain}`}>
                {span1}
              </span>
              <span className={`md:text-xl  lg:text-2xl ${textSecondary} font-semibold`}>
                {span2}
              </span>
              <span className={`md:text-xl  lg:text-2xl ${textMain}`}>
                {span3}
              </span>
              
            </div>
    </>
  )
}

export default Help_card;
