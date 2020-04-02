import React from "react";
import SearchBarContainer from './Containers/SearchBarContainer'
import ShortenedURLContainer from './Containers/ShortenedURLContainer'
import HeaderContainer from "./Containers/HeaderContainer";
import FeaturesContainer from "./Containers/FeaturesContainer";
import CallToActionContainer from "./Containers/CallToActionContainer";
import Footer from "./Components/Footer";
import './css/index.css'

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
