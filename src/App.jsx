import { Nav } from "./components/Nav";
import { Nav2 } from "./components/Nav2";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <section className="h-screen scroll-smooth bg-neutral-900  ">
        <Nav />
        <Nav2 />
        <HomePage />
      </section>
    </>
  );
}

export default App;
