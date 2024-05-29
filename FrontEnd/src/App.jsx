import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Index from './Pages/Home/Home'; // Import the Index component
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Working from './Pages/Working/Working';
import Team from './Pages/Team/Team';
import PredictionResult from './components/PredictionResult/PredictionResult';


function App() {
  return (
    <Router> {/* Wrap your Routes in a BrowserRouter */}
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/prediction-result" element={<PredictionResult />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/working" element={<Working />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/studentlogin" element={<StudentLogin />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;















































// import React from 'react';
// import { Route, Routes} from "react-router-dom";
// import './App.css';
// import Index from './Pages/index'; // Import the Index component

// function App() {
//   return (
//     <div>
//       <Routes>
//           <Route path="/" element={<Index />} />
//           {/* <Route path="/studentlogin" element={<StudentLogin />} /> */}
//       </Routes>
//     </div>
//   );
// }

// export default App;





// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello This is my first react Project.</h1>
//     </div>
//   );
// }

// export default App;
