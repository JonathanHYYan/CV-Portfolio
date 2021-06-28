import Layout from "./components/Layout/Layout";
import LandingPage from "./page/LandingPage/LandingPage";
import Main from "./page/Main/Main";
import Form from "./page/Form/Form";
import Footer from "./components/Layout/Footer"
import About from "./page/About/About";

function App() {
  return (
    <Layout>
      <LandingPage />
      <About />
      <Main />
      <Form />
      <Footer />
    </Layout>
  );
}

export default App;
