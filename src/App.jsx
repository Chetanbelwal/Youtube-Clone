import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar/>
        <div>Video will render here</div>
      </div>
    </>
  );
}

export default App;
