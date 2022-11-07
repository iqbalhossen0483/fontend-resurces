import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Layout from "./Layout";
import TextEditor from "./TextEditor";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<>home page</>} />
          <Route path='/user' element={<Login />} />
          <Route path='/editor' element={<TextEditor />} />
          <Route path='*' element={<> not found</>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
