import Header from './components/Header';
import Landing from './components/Landing';
//import Logos from './components/LogosScrolling';
import AboutSection from './components/About';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <AboutSection/>
      <ScrollToTop/>
    </>
  );
}
