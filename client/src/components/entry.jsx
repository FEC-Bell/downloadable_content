import React from 'react';
import styled from 'styled-components';
import { DlcPrice, DlcRow, DiscountBloc, Hover } from './styles/auxstyles.js';
import DlcHover from './dlcHover.jsx';
import $ from 'jquery';

const DlcName = styled.div`
margin: 0;
padding: 0;
`;

const DiscountPct = styled.div`
padding: 0 3px;
color: #a4d007;
background: #4c6b22;
display: inline-block;
margin: 0;
`;

const DiscountPrices = styled.div`
padding: 0 5px;
display: inline-block;
vertical-align: bottom;
text-align: right;
margin: 0;
background: #000000;
`;

const DiscountOriginal = styled.div`
text-decoration: line-through;
color: #626366;
font-size: 11px;
display: inline;
padding: 0;
margin: 0;
text-align: right;
`;

const DiscountFinal = styled.div`
padding-left: 4px;
font-size: 11px;
display: inline;
color: #acdbf5;
margin: 0;
text-align: right;
`;

var DiscountBlock = (props) => {
  return (
    <DiscountBloc className='discountBlock'>
      <DiscountPct className='discountPct'>
        -{props.discount * 100}%
      </DiscountPct>
      <DiscountPrices className='discountPrices'>
        <DiscountOriginal className='discountOriginalPrice'>
          ${(props.price + 0).toFixed(2)}
        </DiscountOriginal>
        <DiscountFinal className='discountFinalPrice'>
          ${(props.price * (1 - props.discount)).toFixed(2)}
        </DiscountFinal>
      </DiscountPrices>
    </DiscountBloc>
  );
};


class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      left: ''
    };
    this.selector = React.createRef();
    this.handleToggle = this.handleToggle.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }


  componentDidMount() {
    this.updatePosition();
  }

  handleToggle() {
    this.setState({
      hover: !this.state.hover
    });
    this.updatePosition();
  }

  updatePosition() {
    let position = this.selector.current.getBoundingClientRect();
    this.setState({
      left: `${position.right - 16}px`
    });
  }

  render() {

    return (
      <DlcRow className='dlcRow' highlight={this.state.hover} ref={this.selector}>
        <DlcPrice className='dlcPrice'>
          {
            (this.props.data.discountRate === 0) ? `$${(this.props.data.dlcPrice).toFixed(2)}` :
              <DiscountBlock price={this.props.data.dlcPrice} discount={this.props.data.discountRate} />
          }
        </DlcPrice>
        <DlcName className='dlcName' onMouseOver={this.handleToggle} onMouseOut={this.handleToggle}>
          {this.props.data.title}
        </DlcName>
        <Hover left={this.state.left} top={'-38px'} data={this.state.hover.toString()}>
          <DlcHover data={this.props.data} />
        </Hover>
      </DlcRow>
    );
  }
}

export default Entry;