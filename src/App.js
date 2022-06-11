import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/screen2a/screen2a";
import Screen from "./components/screen/screen";
import Table from "./components/table/table";
import Signin from "./components/signIn/signin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/screen" element={<><Navbar /><Screen/></>}></Route>
        <Route path="/tab" element={<><Table /></>}></Route>
        <Route path="/table" element={<><Navbar/> <Table /></>}></Route>
        <Route path="/login" element={<><Navbar/> <Signin /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);