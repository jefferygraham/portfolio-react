import React, { Component } from 'react';
import {
  Button,
  Form,
  Label,
  Input,
  FormFeedback,
  FormGroup,
} from 'reactstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      telephone: '',
      date: null,
      touched: {
        name: false,
        email: false,
        telephone: false,
        date: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(name, email, telephone) {
    const errors = {
      firstName: '',
      lastName: '',
      phoneNum: '',
      email: '',
    };

    if (this.state.touched.name) {
      if (name.length < 2) {
        errors.name = 'First name must be at least 2 characters.';
      }
    }

    const reg = /^\d+$/;
    if (this.state.touched.telephone && !reg.test(telephone)) {
      errors.telephone = 'The phone number should contain only numbers.';
    }

    if (this.state.touched.email && !email.includes('@')) {
      errors.email = 'Email should contain a @';
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(evt) {
    alert('Current State is: ' + JSON.stringify(this.state));
    evt.preventDefault();
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.email,
      this.state.telephone
    );
    return (
      <div className='container border shadow p-5'>
        <div className='row'>
          <p className='lead'>Get the Best Vacation Planned by Experts!</p>
        </div>
        <Form className='form-inline row' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label className='sr-only' htmlFor='name'>
              Name
            </Label>
            <Input
              type='text'
              className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
              id='name'
              name='name'
              placeholder='Your Name'
              value={this.state.name}
              invalid={errors.name}
              onBlur={this.handleBlur('name')}
              onChange={this.handleInputChange}
            />
            <FormFeedback>{errors.name}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              type='email'
              name='email'
              className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
              id='email'
              placeholder='Email'
              value={this.state.email}
              invalid={errors.email}
              onBlur={this.handleBlur('email')}
              onChange={this.handleInputChange}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label className='sr-only' htmlFor='telephone'>
              Number
            </Label>
            <Input
              type='tel'
              className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
              id='telephone'
              name='telephone'
              placeholder='Number'
              value={this.state.telephone}
              invalid={errors.telephone}
              onBlur={this.handleBlur('telephone')}
              onChange={this.handleInputChange}
            />
            <FormFeedback>{errors.telephone}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label className='sr-only' htmlFor='date'>
              Date
            </Label>
            <Input
              type='date'
              name='date'
              className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
              id='date'
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <Button
            type='submit'
            className='btn text-white primary-color mb-2 px-5 col-12 col-lg'
          >
            Submit
          </Button>
        </Form>
        <div className='row'>
          <p className='text-muted small'>
            By submitting this form, you authorize Travel Right to contact you
            about this inquiry.
          </p>
        </div>
      </div>
    );
  }
}

export default ContactForm;
