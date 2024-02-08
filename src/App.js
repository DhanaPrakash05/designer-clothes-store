import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import TailorCategories from "./components/TailorCategories.js";
import Tailors from "./components/Tailors.js";
import Dummy from "./components/dummy.js";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/components/Menu' element={<Menu/>}/>
      <Route path='/components/Tailors' element={<Tailors/>}/>
      <Route path='/components/TailorCategories' element={<TailorCategories/>}/>
      {/* <Route path='/components/dummy' element={<Dummy/>}/> */}
    </Routes>
    </BrowserRouter>
     
  );
}
export default App;
