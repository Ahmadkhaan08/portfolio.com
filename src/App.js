import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Projects from './components/Project/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <Navbar/>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
      </div>
    </div>
  );
}

export default App;
