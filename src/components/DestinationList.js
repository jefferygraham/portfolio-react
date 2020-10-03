import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const DestinationList = (props) => {
  if (props.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  }
  if (props.errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>{props.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  if (props.destinations)
    return (
      <div className='container px-5 py-5'>
        <div className='row flex-column align-items-center'>
          <h2 className='display-4 heading'>Popular Destinations</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            necessitatibus.
          </p>
        </div>
        {/* <!-- CARD DECK --> */}
        <div className='row pt-5 text-center'>
          {props.destinations.map((destination) => (
            <div key={destination.id} className='col-4'>
              <Card className='mb-3 border-0'>
                <CardImg
                  top
                  className='shadow-lg'
                  width='100%'
                  src={baseUrl + destination.src}
                  alt={destination.altText}
                />
                <CardBody>
                  <CardTitle>{destination.title}</CardTitle>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
};

export default DestinationList;
