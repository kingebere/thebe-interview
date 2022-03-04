import React from "react";
import "./App.css";
import Routes from "./routes/routes";

/*-------------------- External Dependencies-----------------------------------*/
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div className="hero">
      <SimpleReactLightbox>
        <Routes />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
