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
import DetailContent from "./pages/detailcontent";
// import TestRedux from "./pages/TESTING/testredux";
import Search from "./pages/search";
import Follow from "./pages/follow";
// import TestTime from "./pages/TESTING/TestTime/testTime";

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
            <Route path="/edit-profile/:id" element={<EditProfile />} />
            <Route path="/spaces/:id" element={<DetailContent />} />
            <Route path="/search" element={<Search />} />
            <Route path="/follows" element={<Follow />} />
            {/*  */}
            {/* <Route path="/test-redux" element={<TestRedux />} /> */}
            {/* <Route path="/test-time" element={<TestTime />} /> */}
            {/*  */}
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
