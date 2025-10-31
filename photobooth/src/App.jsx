import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import PageLayout from './components/PageLayout';

function App() {
  return (
    // <PageLayout>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    // </PageLayout>
  );
}

export default App;