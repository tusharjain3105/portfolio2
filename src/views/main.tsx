import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const MyRouter = () => {
  document.title = "Tushar Jain";
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
