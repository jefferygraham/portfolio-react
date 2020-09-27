import React from 'react';

function ContactForm() {
  return (
    <div className='container border shadow p-5'>
      <div className='row'>
        <p className='lead'>Get the Best Vacation Planned by Experts!</p>
      </div>
      <form className='form-inline row'>
        <label className='sr-only' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
          id='name'
          placeholder='Your Name'
        />
        <label className='sr-only' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
          id='email'
          placeholder='Email'
        />
        <label className='sr-only' htmlFor='telephone'>
          Number
        </label>
        <input
          type='tel'
          className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
          id='telephone'
          placeholder='Number'
        />
        <label className='sr-only' htmlFor='date'>
          Date
        </label>
        <input
          type='date'
          className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
          id='date'
        />

        <button
          type='submit'
          className='btn text-white color-primary mb-2 px-5 col-12 col-lg'
        >
          Submit
        </button>
      </form>
      <div className='row'>
        <p className='text-muted small'>
          By submitting this form, you authorize Travel Right to contact you
          about this inquiry.
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
