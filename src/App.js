import React, {useState} from "react";
import Themecontext from "./Context/Themecontext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";


const App = () => {
  const themeHook = useState("dark")
  return (
    <Themecontext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </Themecontext.Provider>
  )
  
}

export default App;
