import React from 'react';
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
} from 'reactstrap';

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
    const { activeIndex } = this.state;
    const slides = this.props.sliderImages.map((image) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={image.id}
        >
          <img src={image.src} alt={image.altText} />
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
      </div>
    );
  }
}

export default Slider;
