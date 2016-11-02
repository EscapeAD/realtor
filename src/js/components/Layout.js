import React from 'react';
import Header from './Header';
import Home from './sections/Home';
import Service from './sections/Service';
import Listing from './sections/Listing';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './Footer';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Service />
        <Listing />
        <Testimonials />
        <About />
        <Footer />
      </div>
    );
  }
}
