import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Categories from './components/Categories.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/components/Categories' element={<Categories/>}/>
    </Routes>
    </BrowserRouter>
     
  );
}
export default App;
