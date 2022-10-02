import './App.css';
import Header from './components/Header';
import "./App.css";
import CommunitySlider from "./components/CommunitySlider";
import Footer from './components/Footer';
import Resources from './components/Resources';

const App = () => {
  return (
    <div className="App">
      <Header />
      <CommunitySlider />
      <Resources />
      <Footer />
    </div>
  );
};

export default App;
