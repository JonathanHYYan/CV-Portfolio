import Layout from "./components/Layout/Layout";
import LandingPage from "./page/LandingPage/LandingPage";
import About from "./page/About/About";
import Form from "./page/Form/Form";

function App() {
  return (
    <Layout>
      <LandingPage />
      <About />
      <Form />
    </Layout>
  );
}

export default App;
