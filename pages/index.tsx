import React from "react";
import IndexLayout from "../app/indexLayout";
import Head from "next/head";

import { LanguageProvider } from "@/app/components/index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";
import { ModeProvider } from "@/app/components/index components/SwitchMode/modeSwitcher/modeSwitcher";

const IndexPage: React.FC = () => {
  return (
    <div>
      <ModeProvider>
        <LanguageProvider>
          <Head>
            <title> Benjamin Cordoba - Portfolio </title>
            <link rel="icon" href="/icon.png" />
          </Head>
          <IndexLayout>
            <div>{null}</div>
          </IndexLayout>
        </LanguageProvider>
      </ModeProvider>
    </div>
  );
};

export default IndexPage;
