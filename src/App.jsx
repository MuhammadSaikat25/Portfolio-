import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Nav from "./component/Nav";
import MyProject from "./component/Project/MyProject";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <MyProject></MyProject>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;