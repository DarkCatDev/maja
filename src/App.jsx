import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'



import Home from './pages/home/Home';
import Start from './pages/jobseek/Start';
import BirthCert from './pages/jobseek/BirthCert';
import ValID from './pages/jobseek/Id';
import CertFTJS from './pages/jobseek/CertFTJS';
import NBI from './pages/jobseek/Nbi';
import SSS from './pages/jobseek/Sss';
import PagIbig from './pages/jobseek/PagIbig';
import PhilHealth from './pages/jobseek/PhilHealth';
import Resume from './pages/jobseek/Resume';
import Outside from './pages/outside/OutsideProvince';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/Start" element={<Start/>}></Route>
      <Route path="/Start/BirthCert" element={<BirthCert/>}></Route>
      <Route path="/Start/ValidId" element={<ValID/>}></Route>
      <Route path="/Start/CertFTJS" element={<CertFTJS/>}></Route>
      <Route path="/Start/NBI" element={<NBI/>}></Route>
      <Route path="/Start/SSS" element={<SSS/>}></Route>
      <Route path="/Start/PagIbig" element={<PagIbig/>}></Route>
      <Route path="/Start/PhilHealth" element={<PhilHealth/>}></Route>
      <Route path="/Start/Resume" element={<Resume/>}></Route>

      <Route path="/Outside" element={<Outside/>}></Route>
    </Routes>
  )
}

export default App
