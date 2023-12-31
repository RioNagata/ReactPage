import React from 'react';
import Maincontent from './components/webpages/Maincontent';
import Projects from './components/webpages/Projects';
import Contact from './components/webpages/Contact';
import Webpage from './components/Webpage';
import Vehicle from './components/webpages/vehicle';
import Hiraganafun from './components/webpages/hiraganafun';
import Chat from './components/webpages/chat';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.StrictMode>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Webpage />}>
              <Route index element={<Maincontent />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="hiraganafun" element={<Hiraganafun />} />
              <Route path="vehicle" element={<Vehicle />} />
              <Route path="chat" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
