import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

// import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;