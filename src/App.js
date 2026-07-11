
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import Airline from './pages/Airline/index.js';
import Bio from './components/Bio/index.js';
import ContactMe from './pages/ContactMe/index.js';
import Stocks from './pages/Stocks/index.js';
import HealthMonitor from './pages/HealthMonitor/index.js';
import HospitalManagement from './pages/HospitalManagement/index.js';

import 'aos/dist/aos.css'; // Import AOS styles
import { ToastContainer } from 'react-toastify';

function App() {
  return(
    <Router>
      <section className="my-5">
          <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <Bio/>
                </div>
                <div className="col-lg-9">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/Airline" element={<Airline/>} />
                      <Route path="/StockPredictions" element={<Stocks/>} />
                      <Route path="/HealthMonitor" element={<HealthMonitor/>} />
                      <Route path="/HospitalData" element={<HospitalManagement/>} />
                      <Route path="/ContactMe" element={<ContactMe/>} />
                    </Routes>
                </div>
              </div>
          </div>
      </section>
      <ToastContainer />
    </Router>
  )
}

 export default App;
