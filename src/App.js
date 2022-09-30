import { Login } from "./Components/Login";
import "./index.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (



    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>





  );
}

export default App;
