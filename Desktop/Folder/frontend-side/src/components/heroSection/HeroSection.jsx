import React, { Component } from 'react';
import Carousel from '@itseasy21/react-elastic-carousel';

class HeroSection extends Component {
  state = {
    items: [
      { id: 1, url: 'https://images.bewakoof.com/uploads/grid/app/1x1-Banner-Oversized-Graphic-Printed-T-Shirts-Common-1706770380.gif' },
      { id: 2, url: 'https://images.bewakoof.com/uploads/grid/app/Baggy-jeans-IK-RM-1x1--1--1706603339.gif' },
      { id: 3, url: 'https://images.bewakoof.com/uploads/grid/app/HC-BANNERS---1X1--2--1706453122.jpg' },
      { id: 4, url: 'https://images.bewakoof.com/uploads/grid/app/Joggers-for-all-day-comfort-Common-1x1-Banner--2--1706453124.jpg' },
      { id: 5, url: 'https://images.bewakoof.com/uploads/grid/app/Dresses-RM-1X1-Banner--2--1706710117.jpg' }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <Carousel itemsToShow={3}>
        {items.map(item => (
          <img key={item.id} src={item.url} alt={`item-${item.id}`} />
        ))}
      </Carousel>
    );
  }
}

export default HeroSection;