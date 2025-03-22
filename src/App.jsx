import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Pages/Page1.jsx';
import Page2 from './Pages/Page2.jsx';
import Page3 from './Pages/Page3.jsx';
import Page4 from './Pages/Page4.jsx';
import './fonts.css'




export default function App(){

    return(
        <BrowserRouter>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />}/>
            <Route path="/page4" element={<Page4 />}/>
          </Routes>
        </BrowserRouter>
      );
    }