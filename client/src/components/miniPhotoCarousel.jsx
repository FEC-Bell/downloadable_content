import React from 'react';
import {Screenshot,StyledScreenshots} from './styles/hoverStyles.js';

class MiniPhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0
    };
  }
  componentDidMount() {
    this.setState({
      duration: `${this.props.data.length}s`
    });
  }


  render() {
    return (
      <StyledScreenshots id='hoverScreenshots'>
        {this.props.data.map((url, idx) => {
          return (
            <Screenshot delay={`${idx}s`} url={`url(${url})`} key={idx} duration={this.state.duration}>
            </Screenshot>
          );
        })}
      </StyledScreenshots>
    );
  }
}

export default MiniPhotoCarousel;