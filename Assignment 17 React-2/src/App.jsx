import Navbar from "./components/Navbar/Navbar";
import UserCard from "./components/UserCard/UserCard";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <UserCard />

        <div className="row mt-4">
          <div className="col-md-6">
            <About />
          </div>

          <div className="col-md-6">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
