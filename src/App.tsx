import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import LandingPage from "./page/LandingPage/LandingPage";
import ScrollContext from "./store/context";
import About from "./page/About/About";
import Form from "./page/Form/Form";

function App() {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;
  console.log(scroll);
  return (
    <Layout>
      <LandingPage />
      <About />
      <Form />
    </Layout>
  );
}

export default App;
