import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color='light' light expand='lg' fixed='top'>
          <NavbarBrand>
            <a
              className='navbar-brand ml-3 d-flex flex-row align-items-center'
              href='#'
            >
              <img
                src='/assets/images/travel-right-logo.svg'
                width='65'
                height='65'
                alt='Travel Right Logo'
              />
              <h2 className='d-inline heading m-0 pl-2'>Travel Right</h2>
            </a>
          </NavbarBrand>
          <Button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarContent'
            aria-controls='navbarContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </Button>

          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarContent'
          >
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
            <Button
              className='primary-color text-white my-2 my-sm-0 mx-lg-4'
              onClick={this.toggleModal}
            >
              Book Now
            </Button>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h5 className='modal-title heading' id='bookTrip'>
              Book A Trip
            </h5>
          </ModalHeader>
          <ModalBody>
            <form>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputDeparture'>From</label>
                  <select id='inputDeparture' className='form-control'>
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputDestination'>To</label>
                  <select id='inputDestination' className='form-control'>
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='adults'>Adults</label>
                  <select id='adults' className='form-control'>
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='children'>Children</label>
                  <select id='children' className='form-control'>
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='travelclassName'>Travel className</label>
                  <select id='travelclassName' className='form-control'>
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='departureDate'>Departure Date</label>
                  <input
                    type='date'
                    className='form-control'
                    id='departureDate'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='oneWay'
                    name='oneWay'
                    className='custom-control-input'
                  />
                  <label className='custom-control-label' htmlFor='oneWay'>
                    One Way
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='roundTrip'
                    name='roundTrip'
                    className='custom-control-input'
                  />
                  <label className='custom-control-label' htmlFor='roundTrip'>
                    Round Trip
                  </label>
                </div>
              </div>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Cancel
              </button>
              <button type='button' className='btn text-white color-primary'>
                Search Now
              </button>
            </form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Navigation;
