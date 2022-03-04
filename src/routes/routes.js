/* eslint-disable linebreak-style */
import * as React from "react";
import {Routes, Route} from "react-router-dom";

/*-------------------- External Dependencies-----------------------------------*/
import Loading from "../components/loading/loading";

/*--------------------Lazy-Loaded Components-----------------------------------*/
const Home = React.lazy(() => import("../components/home/home"));

const routes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
};
export default routes;
