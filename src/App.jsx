import React from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Allpopularplaces from "./pages/Allpopularplaces";
import Root from "./pages/Root";

const App = () => {
  return (
    <>
      <Nav />
      <div className="font-poppins mx-4  lg:mx-20  ">
        <Routes>
          <Route path="all" element={<Allpopularplaces />} />
          <Route path="/" element={<Root />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
