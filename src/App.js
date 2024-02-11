import React from "react";

import "./App.css";
import { Footer, Blog, Features, WhatGPT3 , Header , Possibility} from "./container";
import { CTA , Brand , Navbar} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="grad__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
