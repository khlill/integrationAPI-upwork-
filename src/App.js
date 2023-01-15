import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/screen2a";
import Signin from "./components/signIn/signin";
import SimpleDialogDemo from "./components/tableTwo/modal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<><Navbar/> <Signin /></>}></Route>
        <Route path="/table" element={<><Navbar/> <SimpleDialogDemo /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);