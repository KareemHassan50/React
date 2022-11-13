import React, { Component } from "react";

// const CarouselFC = (props) => {
//   console.log(props);
//   return <h1>Carousel</h1>;
// };
class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              key={photo}
              src={photo}
              alt="animal"
              data-index={index}
              className={index === active ? "active" : ""}
              onClick={(e) => {
                this.setState({ active: +e.target.dataset.index });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
