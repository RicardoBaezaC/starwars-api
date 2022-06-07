import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
        <div className="app-fondo"></div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/people" element={<People />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
