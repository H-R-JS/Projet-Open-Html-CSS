import "./sass/index.scss";

import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Rent } from "./Components/Rent";

export const App = () => {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="rent" element={<Rent />} />
        </Route>
      </Routes>
    </main>
  );
};
