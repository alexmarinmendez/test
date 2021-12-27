import './App.css';
import SponsorProduct from "./SponsorProduct";

import poett from './assets/images/010045.png';
import axe from './assets/images/009280.png';
import altomayo from './assets/images/001169.png';


function App() {
  return (
    <div class="container">
      <SponsorProduct name="Poett" image={poett} />
      <SponsorProduct name="Axe" image={axe} />
      <SponsorProduct name="Altomayo" image={altomayo} />
    </div>
  );
}

export default App;
