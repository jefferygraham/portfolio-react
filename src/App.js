import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import ContactForm from './ContactForm';
import DestinationList from './DestinationList';
import BookingBanner from './BookingBanner';
import ServicesList from './ServicesList';
import Footer from './Footer';
import { DESTINATIONS } from './shared/destinations.js';
import { SLIDERIMAGES } from './shared/sliderImages.js';
import { SERVICES } from './shared/services.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: DESTINATIONS,
      sliderImages: SLIDERIMAGES,
      services: SERVICES,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Slider sliderImages={this.state.sliderImages} />
        <ContactForm />
        <DestinationList destinations={this.state.destinations} />
        <BookingBanner />
        <ServicesList services={this.state.services} />
        <Footer />
      </div>
    );
  }
}
export default App;
