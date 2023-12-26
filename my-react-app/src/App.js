import "./App.css";
import SearchDemo from "./Components/SearchDemo";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchDemo placeholder="Enter the Book Name..." data={BookData} />
    </div>
  );
}

export default App;
