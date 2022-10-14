import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import PageContent from "./Components/PageContent/PageCont";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route path="/dashboard" index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
