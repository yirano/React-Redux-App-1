import React from "react";
import SearchBarContainer from './Pages/SearchBarContainer'
import ShortenedURLContainer from './Pages/ShortenedURLContainer'
import HeaderContainer from "./Pages/HeaderContainer";
import FeaturesContainer from "./Pages/FeaturesContainer";
import CallToActionContainer from "./Pages/CallToActionContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <SearchBarContainer />
      <ShortenedURLContainer />
      <FeaturesContainer />
      <CallToActionContainer />
      <Footer />
    </div>
  )
}

export default App;
