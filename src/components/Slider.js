import React from 'react';
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.sliderImages.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.sliderImages.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='container'>
          <div className='row'>
            <Loading />
          </div>
        </div>
      );
    }
    if (this.props.errMsg) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h4>{this.props.errMsg}</h4>
            </div>
          </div>
        </div>
      );
    }

    if (this.props.sliderImages) {
      const { activeIndex } = this.state;
      const slides = this.props.sliderImages.map((image) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={image.id}
          >
            <img src={baseUrl + image.src} alt={image.altText} />
            <CarouselCaption
              className='text-left'
              captionText={image.caption}
              captionHeader={image.header}
            />
          </CarouselItem>
        );
      });

      return (
        <div id='mainCarousel'>
          <FadeTransform
            in
            transformProps={{
              exitTransform: 'scale(0.5) translateY(50%)',
            }}
          >
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={this.props.sliderImages}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={this.next}
              />
            </Carousel>
          </FadeTransform>
        </div>
      );
    }
  }
}

export default Slider;
