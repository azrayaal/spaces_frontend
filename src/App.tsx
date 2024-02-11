import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import MainContent from "./pages/home/content";
import Register from "./pages/register";
import RegisterFinal from "./pages/register/registerFinal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MainContent />}></Route>
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-final" element={<RegisterFinal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
