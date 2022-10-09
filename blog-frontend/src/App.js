import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ArticlePage from "./pages/Article";
import Navbar from "./pages/Navbar";
import NotFound from "./pages/NotFound";
import ArticleListPage from "./pages/ArticleListPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="page-body">
          <Routes className="page-body">
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
            <Route path="/article-list" element={<ArticleListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
