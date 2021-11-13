import "./_App.css"
import {
  Article,
  Brand,
  Cta,
  Navbar,
  Feature

} from "./components"

import {
  Footer,
  Header,
  WhatGPT3,
  Possibility,
  Blog,
  Features
} from "./Containers"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
