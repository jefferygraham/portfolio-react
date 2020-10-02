import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import DestinationList from './components/DestinationList';
import BookingBanner from './components/BookingBanner';
import ServicesList from './components/ServicesList';
import Footer from './components/Footer';
import { fetchDestinations } from './redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    destinations: state.destinations,
    services: state.services,
    sliderImages: state.sliderImages,
  };
};

const mapDispatchToProps = {
  fetchDestinations: () => fetchDestinations(),
};

class App extends Component {
  componentDidMount() {
    this.props.fetchDestinations();
  }

  render() {
    return (
      <div>
        <Header />
        <Slider sliderImages={this.props.sliderImages} />
        <ContactForm />
        <DestinationList
          destinations={this.props.destinations.destinations}
          isLoading={this.props.destinations.isLoading}
          errMsg={this.props.destinations.errMsg}
        />
        <BookingBanner />
        <ServicesList services={this.props.services} />
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
