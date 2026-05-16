import Nav          from '@/components/Nav';
import Hero         from '@/components/Hero';
import Services     from '@/components/Services';
import Projects     from '@/components/Projects';
import About        from '@/components/About';
import Process      from '@/components/Process';
import Consultation from '@/components/Consultation';
import Footer       from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-bg text-cream font-body">
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <Consultation />
      <Footer />
    </main>
  );
}
