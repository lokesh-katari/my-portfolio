import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Projectspage from "./components/pages/Projectspage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projectspage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
