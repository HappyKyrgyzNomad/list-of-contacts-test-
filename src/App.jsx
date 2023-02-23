import "./App.scss";
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <SearchBar />
        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default App;
