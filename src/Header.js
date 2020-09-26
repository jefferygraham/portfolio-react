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
import { Control, LocalForm } from 'react-redux-form';

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

  handleSubmit(values) {
    console.log('Current state is: ' + JSON.stringify(values));
    alert('Current state is: ' + JSON.stringify(values));
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
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputDeparture'>From</label>
                  <Control.select
                    model='.inputDeparture'
                    id='inputDeparture'
                    name='inputDeparture'
                    className='form-control'
                  >
                    <option selected>Choose...</option>
                    <option value='departure1'>Departure1</option>
                    <option value='departure2'>Departure2</option>
                    <option value='departure3'>Departure3</option>
                  </Control.select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputDestination'>To</label>
                  <Control.select
                    model='.inputDestination'
                    id='inputDestination'
                    name='inputDestination'
                    className='form-control'
                  >
                    <option selected>Choose...</option>
                    <option value='destination1'>Destination1</option>
                    <option value='destination2'>Destination2</option>
                    <option value='destination3'>Destination3</option>
                  </Control.select>
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='adults'>Adults</label>
                  <Control.select
                    model='.adults'
                    id='adults'
                    name='adults'
                    className='form-control'
                  >
                    <option selected>Choose...</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </Control.select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='children'>Children</label>
                  <Control.select
                    model='.children'
                    id='children'
                    name='children'
                    className='form-control'
                  >
                    <option selected>Choose...</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </Control.select>
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='travelclassName'>Travel className</label>
                  <Control.select
                    model='.travelclassName'
                    id='travelclassName'
                    name='travelclassName'
                    className='form-control'
                  >
                    <option selected>Choose...</option>
                    <option value='travelClass1'>TravelClass1</option>
                    <option value='travelClass2'>TravelClass2</option>
                    <option value='travelClass3'>TravelClass3</option>
                  </Control.select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='departureDate'>Departure Date</label>
                  <Control.text
                    type='date'
                    className='form-control'
                    model='.departureDate'
                    id='departureDate'
                    name='departureDate'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div className='custom-control custom-radio custom-control-inline'>
                  <Control.radio
                    model='.flightType'
                    id='oneWay'
                    value='oneWay'
                    name='flightType'
                    className='custom-control-input'
                  />
                  <label className='custom-control-label' htmlFor='oneWay'>
                    One Way
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <Control.radio
                    model='.flightType'
                    id='roundTrip'
                    value='roundTrip'
                    name='flightType'
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
              <Button type='submit' className='btn text-white color-primary'>
                Search Now
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Navigation;
