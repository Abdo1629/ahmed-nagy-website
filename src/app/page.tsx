import Header from './components/Header';
import Landing from './components/Landing';
import Logos from './components/LogosScrolling';
import AboutSection from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Video from './components/Video';
import Footer from './components/Footer';
import Features from './components/Services';
import ContactForm from './components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <AboutSection/>
      <Logos />
      <Video />
      <Features />
      <ContactForm />
      <ScrollToTop/>
      <Footer/>
    </>
  );
}
