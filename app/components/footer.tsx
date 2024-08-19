import React from "react";
import LanguageTexts from "./index components/SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./index components/SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./index components/SwitchMode/modeSwitcher/modeSwitcher";

const Footer = () => {
  const { mode } = useMode();
  const { textMain, textSecondary, telefono, mail, git } = Colors[mode].text;
  const { bg, main, borderSecondary, overlap, overlap2 } = Colors[mode].color;

  const { language } = useLanguage();
  const { title1, title2, title3, span1, span2 } =
    LanguageTexts[language].footer;

  return (
    <div className={`mt-10 pb-14 w-fit mx-auto`}>
      <div className={`flex flex-col`}>

        <div className={`flex justify-center my-2 text=lg xl:text-2xl ${textSecondary} font-bold`}>
          <span className={``}> {title1}{} </span>
          <span className={`ml-2`}> {title2} </span>
          <span className={`ml-2`}> {title3} </span>
        </div>

        <div className={`flex justify-center  `}>
          <span className={`${textMain}  text-sm font-semibold xl:text-lg`}> {span1} </span>
        </div>

        <div className={`flex justify-center `}>
            <a href="https://github.com/CordobaBenjamin/BenjaminCordoba-Portfolio" target="_blank"> <span className={`${textMain} text-sm font-semibold xl:text-lg button-glow`}> {span2} </span></a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
