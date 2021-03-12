import Header from "./components/Header"
import SideBar from "./components/SideBar"
import CardsProducts from "./components/CardsProducts"

import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <CardsProducts/>
      </BrowserRouter>
   </>
  );
}

export default App;
