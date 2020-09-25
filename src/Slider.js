import React from 'react';
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
} from 'reactstrap';
const items = [
  {
    src: '/assets/images/globe.jpg',
    header: 'Travel Right',
    altText: 'Globe',
    caption: "If you're going to travel, you might as well Travel Right.",
  },
  {
    src: '/assets/images/train.jpg',
    header: 'Land',
    altText: 'Train',
    caption:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident.',
  },
  {
    src: '/assets/images/cruise.jpg',
    header: 'Sea',
    altText: 'Deck of cruise ship',
    caption:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident.',
  },
  {
    src: '/assets/images/plane.jpg',
    header: 'Air',
    altText: 'Plane above the clouds',
    caption:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident.',
  },
];

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
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            className='text-left'
            captionText={item.caption}
            captionHeader={item.header}
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
            items={items}
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
