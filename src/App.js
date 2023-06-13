import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Findwork } from "./components/Findwork";
import Posts from "./components/Posts";
import { MyProfile } from "./components/MyProfile";
import { Overview } from "./components/Overview";



function App() {
  return (
    <>
      <Router>
        <div className="main-page">
        <NavBar />
          <Routes>
            <Route path="/" element={<Findwork />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Overview" element={<Overview />} />

          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;