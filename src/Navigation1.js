import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
export default function Navigation() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}
