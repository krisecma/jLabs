import "./App.css";
import Home from "./components/Pages/Home";
import { RecordsProviderContextProvider } from "./context/Records";

function App() {
  return (
    <div className="App">
      <RecordsProviderContextProvider>
        <Home />
      </RecordsProviderContextProvider>
    </div>
  );
}

export default App;
