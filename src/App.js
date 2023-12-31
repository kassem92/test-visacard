// import Home from "src/components/Home";
import './App.css';
import RightSection from "./components/RightSection";
import VisaForm from "./components/VisaForm";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import nature from './imgs/nature.png'
function App() {
  return (
    <div className="App">
      <div className={'visa-container'}>
            <img src={nature}/>
              <VisaForm/>
              <RightSection/>

      </div>
    </div>
  );
}

export default App;

// :nail_care: Styling
// Background: #1A1B23
// Surface: #282A37
// Input: #323645
// button: #42BBFF
//
// text
// labels and parragraphap: #C0C0C8
// text: #FFF
