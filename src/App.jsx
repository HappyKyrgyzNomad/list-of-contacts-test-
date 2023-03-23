import "./App.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <div className="App">
        <SearchBar />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
