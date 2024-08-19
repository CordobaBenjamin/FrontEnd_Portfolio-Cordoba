import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Colors from "./components/index components/SwitchMode/modeSwitcher/modeColors";
import { useLanguage } from "./components/index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";
import { useMode } from "./components/index components/SwitchMode/modeSwitcher/modeSwitcher";

import Navbar from "./components/navbar";
import Main_tittle from "./components/main_tittle";
import About from "./components/about";
import Skills_bar from "./components/index components/skills_bar";
import Help_card from "./components/index components/Help_card";
import Learning_card from "./components/index components/learning_card";
import WhyMe_card from "./components/index components/whyMe_card";
import Proyects from "./components/proyects";
import Contact from "./components/contact";
import Footer from "./components/footer";

import "animate.css";
import "./globals.css";

interface Metadata {
  title: string;
  description: string;
  authors: string;
  keywords: string[];
  language?: string; // Idioma opcional
}

export const metadata: Metadata = {
  title: "Front End Portfolio - Benjamin Córdoba",
  description:
    "Explore Benjamin Córdoba's projects and skills as a Front End Developer with experience in Next.js, React, and more.",
  authors: "Benjamin Córdoba",
  keywords: [
    "Front End",
    "Desarrollador Web",
    "Next.js",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  language: "en",
};

interface IndexLayoutProps {
  children: ReactNode; // Declara que children es de tipo ReactNode
}

function IndexLayout({ children }: { children: React.ReactNode }) {
  const { language, changeLanguage } = useLanguage();
  const { mode, changeMode } = useMode();
  const { textMain, textSecondary, twisted } = Colors[mode].text;
  const { bg, main } = Colors[mode].color;

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={bg}>
      <Navbar />

      <Main_tittle />

      {/* Sección About */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <About />
      </motion.div>

      {/* Sección Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div ref={cardsRef} className="flex flex-col xl:flex-row">
          <Help_card />
          <WhyMe_card />
          <Learning_card />
        </div>
      </motion.div>

      {/* Sección Skills Bar */}
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <Skills_bar />
      </motion.div>

      {/* Sección Projects */}

      <Proyects />

      {/* Sección Contact */}
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <Contact />
        <Footer />
      </motion.div>

      {children}
    </div>
  );
}

export default IndexLayout;
