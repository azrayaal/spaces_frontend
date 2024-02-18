import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import MainContent from "./pages/home/content";
import Register from "./pages/register";
import RegisterFinal from "./pages/register/registerFinal";
// import DetailContent from "./pages/detailcontent";
import EditProfile from "./pages/editProfile";
import MyProfile from "./pages/myProfile";

// import dotenv from "dotenv";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MainContent />}></Route>
            {/* <Route path="/spaces/:id" element={<DetailContent />} /> */}
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
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
