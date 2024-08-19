import React from "react";
import Image from "next/legacy/image"
import LanguageTexts from "./SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./SwitchMode/modeSwitcher/modeSwitcher";

const Skills_bar = () => {
  const { mode } = useMode();
  const { textMain, textSecondary, textSecondary2, next } = Colors[mode].text;
  const { bg, main, borderSecondary, overlap, overlap2 } = Colors[mode].color;

  const { language } = useLanguage();
  const { h2, h2Secondary } = LanguageTexts[language].about;

  const languages = [
    {
      name: "React",
      icon: "/react_icon.png",
      class: `h-20 min-w-20 p-2 rounded-xl  grayscale duration-1000 transition-all animate-photo`,
    },
    {
      name: "Next.js",
      icon: `${next}`,
      class: `h-20 min-w-20 p-2rounded-xl  grayscale duration-1000 transition-all animate-photo`,
    },
    {
      name: "Tailwind",
      icon: "/tailwind_icon.png",
      class: `h-20 min-w-20 py-5 p-2 rounded-xl grayscale duration-1000 transition-all animate-photo`,
    },
    {
      name: "TypeScript",
      icon: "/tsx_icon.png",
      class: `h-20 min-w-20 p-2 rounded-xl grayscale duration-1000 transition-all animate-photo`,
    },
    {
      name: "JavaScript",
      icon: "/jsx_icon.png",
      class: `h-20 min-w-20 p-2 rounded-xl  grayscale duration-1000 transition-all animate-photo`,
    },
  ];

  return (
    <div className="my-20">
      <div className="overflow-hidden relative w-full h-4/5 my-5 xl:w-50">
        <div className="flex flex-col justify-center mx-auto w-fit">
          <h2
            className={`mr-5 mb-6 ${textSecondary} text-2xl  md:text-4xl xl:text-6xl`}
          >
            {h2}
          </h2>
        </div>


        <div className="animate-slide whitespace-nowrap flex items-center  mb-5 h-1/4 xl:w-2/3">
          {languages.map((lang, index) => (
            <div key={index} className="mx-6 flex items-center flex-col">
              <div className="w-20 h-20 relative md:w-24 md:h-24 xl:w-28 xl:h-28 ">
                <Image
                  src={lang.icon}
                  alt={lang.name}
                  className={lang.class}
                  layout="fill"
                  sizes="100vw"
                />
              </div>
              <div className="">
                <h2 className={`${textSecondary2} text-xl`}>{lang.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills_bar;
