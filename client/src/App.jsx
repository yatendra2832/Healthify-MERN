import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
