import { useState } from 'react';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import Home from './home/home';
import SignUpLogin from './auth/signup';
import Services from './services/services';
import Booking from './booking/booking';
import Feedback from './feedback/feedback';
import Navbar from './components/navbar';

function App() {
  return (

    <BrowserRouter>
      <div className="flex justify-between gap-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignUpLogin />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booknow" element={<Booking />} />
          <Route path="/feedback" element={<Feedback />} />

        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
