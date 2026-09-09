import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTransition />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
