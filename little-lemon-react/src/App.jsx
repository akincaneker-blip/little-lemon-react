import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />

      <main>
        <Hero />
        <FeatureGrid />
        <MenuSection />
        <ReservationSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;