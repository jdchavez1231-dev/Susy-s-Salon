/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white uppercase-not-serif">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <InstagramFeed />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

