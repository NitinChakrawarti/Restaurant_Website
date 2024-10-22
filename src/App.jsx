// import { useState } from 'react';
// import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
// import Home from './home/home';
// import SignUpLogin from './auth/signup';
// import Services from './services/services';
// import Booking from './booking/booking';
// import Feedback from './feedback/feedback';
// import Navbar from './components/navbar';
// import SignupcontextProvider  from './context/signupcontext';

// function App() {
//   return (
//     <SignupcontextProvider>
//       <BrowserRouter>

//         <div className="flex justify-between gap-10">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signin" element={<SignUpLogin />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/booknow" element={<Booking />} />
//             <Route path="/feedback" element={<Feedback />} />

//           </Routes>
//         </div>


//       </BrowserRouter>
//     </SignupcontextProvider>
//   )
// }

// export default App


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
function App() {
  const [user, setUser] = useState(false);
  const [name, setName] = useState(false);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <userName.Provider value={{ name, setName }}>
        <BrowserRouter>
          <div className="flex gap-10">
            <Navbar />
            <div className='w-full bg-[#cdffcd]'>
              <Routes>
                <Route path="/" element={<SignUpLogin />} />
                <Route path='/home' element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/booknow" element={<Booking />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
              <Footer />

            </div>

          </div>
        </BrowserRouter>
      </userName.Provider>
    </userContext.Provider>
  );
}

export default App;
