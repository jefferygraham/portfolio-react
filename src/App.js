import React from 'react';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import ContactForm from './ContactForm';
import DestinationList from './DestinationList';
import BookingBanner from './BookingBanner';
import ServicesList from './ServicesList';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ContactForm />
      <DestinationList />
      <BookingBanner />
      <ServicesList />
      <Footer />
    </div>
  );
}

export default App;
