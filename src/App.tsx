import Layout from "./components/Layout/Layout";
import LandingPage from "./components/Landing/Landing";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { ThemeProvider } from "styled-components";
import {theme} from "./components/UI/themeStyles";



function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Layout>
        <LandingPage />
        <About />
        <Main />
        <Form />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
