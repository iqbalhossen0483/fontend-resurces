import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Layout from "./Layout";
import TextEditor from "./TextEditor";
import Register from "./Register";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "https://stackoverflow.com/favicon.ico";
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<div>home</div>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/editor' element={<TextEditor />} />
          <Route path='*' element={<> not found</>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
