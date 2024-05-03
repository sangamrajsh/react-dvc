import React from "react"
import Photo from "./Components/Photo"
import Name from "./Components/Name"
import Buttons from "./Components/Buttons"
import About from "./Components/About"
import Interest from "./Components/Interest"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="app">
      <Photo/>
      <Name/>
      <Buttons/>
      <About/>
      <Interest/>
      <Footer/>
      </div>
   
  );
}

export default App;
