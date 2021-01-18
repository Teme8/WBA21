import React from "react";
import { MainProvider } from "./contexts/Maincontext";
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <MainProvider>
    <Navigator />
    </MainProvider>
  );
};


export default App;
