import Layout from "./components/Layout/Layout";
import LandingPage from "./page/LandingPage/LandingPage";
import About from "./page/About/About";
import Form from "./page/Form/Form";
import Footer from "./components/Layout/Footer"

function App() {
  return (
    <Layout>
      <LandingPage />
      <About />
      <Form />
      <Footer />
    </Layout>
  );
}

export default App;
