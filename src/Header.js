import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isModalOpen: false,
      isNavOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color='light' light expand='lg' fixed='top'>
          <NavbarBrand className='mr-auto' href='/'>
            <img
              src='/assets/images/travel-right-logo.svg'
              width='65'
              height='65'
              alt='Travel Right Logo'
            />
            <h2 className='d-inline heading m-0 pl-2'>Travel Right</h2>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='ml-auto'>
              <NavItem>
                <NavLink className='nav-link' href='/home'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='/about'>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='/services'>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' href='/contact'>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
            <span>
              <Button
                className='primary-color text-white my-2 my-sm-0 mx-lg-4'
                onClick={this.toggleModal}
              >
                Book Now
              </Button>
            </span>
          </Collapse>
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
