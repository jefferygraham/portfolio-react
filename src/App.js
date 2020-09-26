import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import ContactForm from './ContactForm';
import DestinationList from './DestinationList';
import BookingBanner from './BookingBanner';
import ServicesList from './ServicesList';
import Footer from './Footer';

const mapStateToProps = (state) => {
  return {
    destinations: state.destinations,
    services: state.services,
    sliderImages: state.sliderImages,
  };
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider sliderImages={this.props.sliderImages} />
        <ContactForm />
        <DestinationList destinations={this.props.destinations} />
        <BookingBanner />
        <ServicesList services={this.props.services} />
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(App));
