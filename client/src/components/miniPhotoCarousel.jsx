import React from 'react';
import {Screenshot,StyledScreenshots} from './styles/hoverStyles.js';

class MiniPhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIDX: 0
    };
  }


  render() {
    return (
      <StyledScreenshots id='hoverScreenshots'>
        {/* {this.props.data.map((url, idx) => {
          return (
            <Screenshot style={{ animationDelay: `${idx}s`, backgroundImage: `url(${url})` }} key={idx}>
            </Screenshot>
          );
        })} */}
      </StyledScreenshots>
    );
  }
}

export default MiniPhotoCarousel;