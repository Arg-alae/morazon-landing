import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Testimonials from './components/Testimonials';
import Order from './components/Order';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Details />
      <Testimonials />
      <Order />
      <Footer />
    </div>
  );
}