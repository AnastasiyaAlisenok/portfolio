import React from "react";
import "./App.css";
import { HeaderContainer } from "./containers/header/HeaderContainer";
import GreetingSection from "./containers/GreetingSection/GreetingSection";
import AboutMeSection from "./containers/AboutMeSection/AboutMeSection";
import StackSection from "./containers/StackSection/StackSection";
import ProjectsSection from "./containers/ProjectsSection/ProjectsSection";

const App = (): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      <GreetingSection />
      <AboutMeSection />
      <StackSection />
      <ProjectsSection />
    </>
  );
};

export default App;
