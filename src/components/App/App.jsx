import { useState } from 'react';
import './App.css';

import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Preloader />
      <About />
      <NewsCards />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default App; 