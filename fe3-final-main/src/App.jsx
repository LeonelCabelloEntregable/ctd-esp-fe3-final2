
import Footer from "../src/Components/utils/Footer/Footer";
import Router from "./Routes/Router";
import Navbar from "./Components/utils/Navbar/Navbar";
import  { useGlobalContext } from "./Components/utils/global.context";


function App() {
  const {isDark} = useGlobalContext()
  return (
      <div className={isDark () ? "App App-dark" : "App" }>
          <Navbar/>
          <main><Router/></main>
          <Footer/>
      </div>
  );
}

export default App;
