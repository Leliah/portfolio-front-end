// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/Four0Four.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";

//COMPONENTS
import Navbar from "./Components/Navbar";

function App() {
  return <div className="App">
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/homefeed" element={<Index />} />
            <Route path="/homefeed/new" element={<New />} />
            <Route path="/homefeed/:index" element={<Show />} />
            <Route path="/homefeed/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </Router>
  </div>;
}

export default App;

