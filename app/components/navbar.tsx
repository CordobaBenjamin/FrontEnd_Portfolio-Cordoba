import React from "react";
import "animate.css";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";

import LanguageTexts from "./index components/SwitchMode/lenguageSwitcher/lenguageText";
import { useLanguage } from "./index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";
import { LanguageSwitcher } from "./index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";

import Colors from "./index components/SwitchMode/modeSwitcher/modeColors";
import { useMode } from "./index components/SwitchMode/modeSwitcher/modeSwitcher";
import { ModeSwitcher } from "./index components/SwitchMode/modeSwitcher/modeSwitcher";

const Navbar = () => {
  const { language } = useLanguage();
  const { a1, a2, a3, a4 } = LanguageTexts[language].navbar;

  const { mode } = useMode();
  const { textMain, textSecondary, twisted } = Colors[mode].text;
  const { bg, main, overlap, borderL, bgSecondary, overlap3 } = Colors[mode].color;

  let changeColor = textSecondary;

  const navigation = [
    // Marca la página actual como "current"
    { name: a1, href: "#about" },
    { name: a2, href: "#proyect" },
    { name: a3, href: "#contact" },
  ];

  return (
    <Disclosure as="nav" className={`${bg} ${overlap3} shadow-lg`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <h2
                  className={`text-2xl lg:text-4xl font-bold animate__animated animate__zoomIn ${textSecondary}`}
                >
                  Portfolio
                </h2>
              </div>

              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  <div className={`${twisted} px-3 py-2 `}>
                    <ModeSwitcher />
                  </div>

                  <div className={`${textSecondary} px-3 py-2 `}>
                    <LanguageSwitcher />
                  </div>

                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md sm:px-1  lg:text-xl font-medium ${textMain}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex sm:hidden">
              <div className={`${twisted} px-3 py-2 `}>
                    <ModeSwitcher />
                  </div>

                  <div className={`${textSecondary} px-3 py-2 `}>
                    <LanguageSwitcher />
                  </div>
                <Disclosure.Button
                  className={`p-2 rounded-md ${textMain}  ml-5`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <a className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className={`sm:hidden absolute  w-full`}>
            <div className="pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 m-1 rounded-md text-base font-medium ${borderL} border-2 ${bgSecondary} ${textSecondary} `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
