import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './Actions/actions'
import SearchBarContainer from './Pages/SearchBarContainer'
import ShortenedURLContainer from './Pages/ShortenedURLContainer'

function App() {
  const dispatch = useDispatch();
  const url = useSelector(state => state.url)
  // shortenURL("https://twitter.com/search?q=%23secondwave&src=trend_click");
  return (
    <div className="App">
      <button onClick={dispatch(
        actions.shortenURL("https://twitter.com/search?q=%23secondwave&src=trend_click"))}
      >X</button>
      <SearchBarContainer />
      <ShortenedURLContainer />
    </div>
  )
}

export default App;
