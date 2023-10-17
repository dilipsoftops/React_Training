import Navbar from "./Components/Navbar";
import "./App.css";
import Showcase from "./Components/Showcase";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Showcase />
      </div>
    </div>
  );
}

export default App;
