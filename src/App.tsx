import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import MainContent from "./pages/home/content";
import Register from "./pages/register";
import RegisterFinal from "./pages/register/registerFinal";
// import DetailContent from "./pages/detailcontent";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { UserFromPayload } from "./datas/data-types";
import EditProfile from "./pages/editProfile";
import MyProfile from "./pages/myProfile";

// import dotenv from "dotenv";

function App() {
  // dotenv.config();
  const [dataUserLogin, setDataUserLogin] = useState<UserFromPayload>();
  // console.log("data user dari APp", dataUserLogin);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: UserFromPayload = jwtDecode(jwtToken);
      setDataUserLogin(payload.user);
      console.log("data dari App", payload.user);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home {...dataUserLogin} />}>
            <Route index element={<MainContent {...dataUserLogin} />}></Route>
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
