import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex mt-20">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export default App;
