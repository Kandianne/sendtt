import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetInfo from './pages/GetInfo';

function App() {
  return (
    <BrowserRouter basename="/sendtt">
      <div className='m-10'>
        <img src='sendtt/assets/sendttlogo.png' alt='SendTT Logo' className='m-auto mt-6 mb-6 w-300 h-10' />
        Send TT the Simple Way
      </div>
      <Routes>
        <Route path="/" element={<GetInfo />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
