import React from "react";
import Image from "next/legacy/image";
import 'animate.css'

import LanguageTexts from "./index components/SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";
import Colors from './index components/SwitchMode/modeSwitcher/modeColors';
import { useMode } from './index components/SwitchMode/modeSwitcher/modeSwitcher';


const Proyects = () => {
  
  const {mode} = useMode()
  const {textMain, textSecondary} = Colors[mode].text;
  const {bg, main, borderY, borderYSecondary, overlap, overlap2} = Colors[mode].color;


  const { language } = useLanguage();
  const {
    title1,
    title2,
    h2,
    span1,
    span2,
    span3,
    span4,
    span5,
    span6,
    span7,
    span8,
  } = LanguageTexts[language].login_project;
  const {
    ah2,
    aspan1,
    aspan2,
    aspan3,
    aspan4,
    aspan5,
    aspan6,
    aspan7,
    aspan8,
    aspan9,
    aspan10,
  } = LanguageTexts[language].ecommerce_project;
  const {
    bh2,
    bspan1,
    bspan2,
    bspan3,
    bspan4,
    bspan5,
    bspan6,
    bspan7,
    bspan8,
    bspan9,
    bspan10,
  } = LanguageTexts[language].game_project;

  return (
    <>
      <div id="proyect" className={`w-full p-4 ${bg} mt-16`}>
        <div className={`grid grid-cols-2 grid-rows-2 pb-4 mx-2 sm:mx-auto sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-7/12 border-4 h-1/2 ${borderYSecondary}`}>
          <div className={`col-start-1 col-end-2 row-start-1`}>
            <h1 className={`text-6xl sm:text-8xl 2xl:text-10xl font-semibold flex pt-2 w-full ${textSecondary}`}>
              {title1}
            </h1>
          </div>
          <div className={`col-start-2 col-end-3 row-start-2`}>
            <h1 className={`text-6xl sm:text-8xl 2xl:text-10xl font-semibold flex justify-end pt-2 w-full ${textMain} `}>
              {title2}
            </h1>
          </div>
        </div>

        <div>
          <div className={`flex flex-col mx-auto mt-14  ${overlap} p-4 rounded-md sm:w-11/12 md:w-9/12 lg:w-8/12 2xl:w-7/12`}>
            <h2 className={`flex justify-center font-bold text-xl lg:text-2xl 2xl:text-4xl ${textSecondary} border-2 ${borderY}`}>
              {h2}
            </h2>
            <div className={`w-full h-72 xl:h-96  ${overlap2} rounded-xl overflow-hidden my-5 relative ${textMain}`}>
              <a href="https://github.com/CordobaBenjamin/Cordoba-LogginProyect" target="_blank"> 
                <Image
                  src="/sign_up.png"
                  className="inset-0 w-full h-full object-cover grayscale-image transition-transform duration-300 transform scale-100 hover:scale-125"
                  alt="Image"
                  layout="fill"
                  sizes="100vw"
                />
              </a>
            </div>
            <div className={`lg:text-xl 2xl:text-2xl ${textMain}`}>
              <span>{span1}</span>
              <span className="font-bold"> {span2}</span>
              <span>{span3}</span>
              <span className="font-bold"> {span4}</span>
              <span>{span5}</span>
              <span className="font-bold">{span6}</span>
              <span> {span7}</span>
              <span className="font-bold"> {span8}</span>
            </div>
          </div>

          <div className={`flex flex-col mx-auto mt-14  ${overlap} p-4 rounded-md sm:w-11/12 md:w-9/12 lg:w-8/12 2xl:w-7/12`}>
          <h2 className={`flex justify-center font-bold text-xl lg:text-2xl 2xl:text-4xl ${textSecondary} border-2 ${borderY}`}>
              {ah2}
            </h2>
            <div className={`w-full h-72 xl:h-96  ${overlap2} rounded-xl overflow-hidden my-5 relative ${textMain}`}>
              <a href="https://github.com/CordobaBenjamin/MarketGaming-eCommerceProyect" target="_blank"> 
                <Image
                  src="/market_gaming.png"
                  className="inset-0 w-full h-full object-cover  grayscale-image transition-transform duration-300 transform scale-100 hover:scale-125"
                  alt="Image"
                  layout="fill"
                  sizes="100vw"
                />
              </a>
            </div>
            <div className={`lg:text-xl 2xl:text-2xl ${textMain}`}>
              <span>{aspan1}</span>
              <span className="font-bold"> {aspan2}</span>
              <span> {aspan3}</span>
              <span> {aspan4}</span>
              <span className="font-bold"> {aspan5}</span>
              <span> {aspan6}</span>
              <span className="font-bold"> {aspan7} </span>
              <span> {aspan8} </span>
              <span className="font-bold"> {aspan9}</span>
              <span> {aspan10}</span>
              {/* <span className="font-bold"> {aspan11}</span> */}
            </div>
          </div>

          <div className={`flex flex-col mx-auto mt-14  ${overlap} p-4 rounded-md sm:w-11/12 md:w-9/12 lg:w-8/12 2xl:w-7/12`}>
          <h2 className={`flex justify-center font-bold text-xl lg:text-2xl 2xl:text-4xl ${textSecondary} border-2 ${borderY} `}>
              {" "}
              {bh2}
            </h2>
            <div className={`w-full h-72 xl:h-96  ${overlap2} rounded-xl overflow-hidden my-5 relative ${textMain}`}>
              <a href="https://github.com/CordobaBenjamin/TsProyect-HangMan-Game" target="_blank">
                <Image
                  src="/hangman.png"
                  className="inset-0 w-full h-full object-cover  grayscale-image transition-transform duration-300 transform scale-100 hover:scale-125"
                  alt="Image"
                  layout="fill"
                  sizes="100vw"
                />
              </a>
            </div>
            <div className={`lg:text-xl 2xl:text-2xl ${textMain}`}>
              <span className="font-bold"> {bspan1}</span>
              <span> {bspan10}</span>
              <span className="font-bold"> {bspan2}</span>
              <span> {bspan3}</span>
              <span> {bspan4} </span>
              <span>{bspan5}</span>
              <span className="font-bold"> {bspan6} </span>
              <span> {bspan7}</span>
              <span> {bspan8} </span>
              <span> {bspan9} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyects;
