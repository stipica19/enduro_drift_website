import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import "./utilities.css";
import "./App.css";
import TourGuide from "./components/TourGuide";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Apply from "./components/Apply";
import VideoGallery from "./components/VideoGallery";
import GuestBook from "./components/GuestBook";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import Termine from "./components/Termine";
import Preloader from "./components/Preloader";
import AdminDashboard from "./components/AdminDashboard";
import AdminApply from "./components/AdminApply";
import Login from "./components/Login";

import ProtectedRoute from "./components/ProtectedRoute";

AOS.init();

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 1500);

  return (
    <div className="">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <div className="apppp">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/video-gallery" element={<VideoGallery />} />
                <Route path="/tour-guide" element={<TourGuide />} />
                <Route path="/guest-book" element={<GuestBook />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dates-2023" element={<Termine />} />
                <Route path="/admin-apply/:id" element={<AdminApply />} />
                <Route path="/login" element={<Login />} />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
          <SocialMedia />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
