import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import MainContent from "./pages/home/content";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MainContent />}></Route>
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
