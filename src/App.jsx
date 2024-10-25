import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './home/home';
import SignUpLogin from './auth/signup';
import Services from './services/services';
import Booking from './booking/booking';
import Feedback from './feedback/feedback';
import Navbar from './components/navbar';
import { userContext } from './context/signupcontext';
import { useState } from 'react';
import Footer from './footer/footer';
import { userName } from './context/signupcontext';
import { navopen } from './context/signupcontext';
import { useCycle } from 'framer-motion';
import { booklist } from './context/signupcontext';
function App() {
  const [user, setUser] = useState(false);
  const [name, setName] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [book, setBook] = useState([]);

  return (
    <booklist.Provider value={{ book, setBook }}>

      <userContext.Provider value={{ user, setUser }}>
        <navopen.Provider value={{ isOpen, toggleOpen }}>
          <userName.Provider value={{ name, setName }}>
            <BrowserRouter>
              <div className="flex gap-10">
                <Navbar />
                <div className='w-full bg-[#cdffcd]'>
                  <Routes>
                    <Route path="/user" element={<SignUpLogin />} />
                    <Route path='/' element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/feedback" element={<Feedback />} />
                  </Routes>
                  <Footer />
                </div>
              </div>
            </BrowserRouter>
          </userName.Provider>
        </navopen.Provider>
      </userContext.Provider>
    </booklist.Provider>

  );
}

export default App;
