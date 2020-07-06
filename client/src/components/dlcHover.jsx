import React from 'react';
// import { DlcTable } from './styles/auxstyles.js';
import styled from 'styled-components';
import moment from 'moment';

const StyledContent = styled.div`
padding: 16px;
margin: 0;
color: #30455a;
font-size: 12px;
display: block;
`;

const HoverBox = styled.div`
margin-top: 8px;
margin-bottom: 8px;
background: linear-gradient(to bottom, rgba(227,234,239,1) 0%,rgba(199,213,224,1) 100%);
width: 306px;
color: #30455a;
font-size: 12px;
overflow: hidden;
box-shadow: 0 0 12px #000000;
padding: 0;
margin: 0;
display: block;
`;

const StyledScreenshots = styled.div`
position: relative;
width: 274px;
height: 153px;
margin: 5px 0;
`;

const Screenshot = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-size: cover;
background-position: center center;
opacity: 0;
transition: opacity 300ms;
animation: screenshot_hover_fadein 4s linear;
animation-iteration-count: infinite;
background-image: url(${props => props.url});
display: block;
`;

const StyledReview = styled.span`
color: ${props => props.summary};
`;

const StyledTitle = styled.h4`
color: #222d3d;
font-size: 15px;
font-family: "Motiva Sans", Sans-serif;
font-weight: normal;
text-transform: unset;
letter-spacing: 0px;
margin-top: -4px;
line-height: 17px;
margin-bottom: 4px;
`;

const StyledRelease = styled.div`
font-size: 10px;
display: flex;
justify-content: space-between;
`;


const StyledRow = styled.div`
overflow: hidden;
height: 19px;
margin-top: 2px;
`;

const StyledTag = styled(StyledRow)`
background-color: #96a3ae;
color: rgba(227,234,239,1);
box-shadow: none;
padding: 0 4px;
font-size: 11px;
border-radius: 2px;
cursor: pointer;
margin-bottom: 3px;
max-width: 200px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin-right: 2px;
display: inline-block;
line-height: 19px;
`;

const StyledBody = styled.div`
margin-bottom: 6px;
`;

const StyledReviewSum = styled.div`
margin-bottom: 10px;
border-radius: 2px;
padding: 4px;
color: #c6d4df;
background-color: rgba( 38, 54, 69, 0.6);
`;


const positives = ['Overwhelmingly Positive', 'Mostly Positive', 'Very Positive'];
const negatives = ['Overwhelmingly Negative', 'Mostly Negative', 'Very Negative'];



const Content = (props) => {
  let color;
  if (negatives.indexOf(props.data.reviewSummary) > -1) {
    color = '#a34c25';
  } else if (positives.indexOf(props.data.reviewSummary) > -1) {
    color = '#66c0f4';
  } else {
    color = '#b9a06a';
  }

  return (
    <HoverBox id='hoverBox'>
      <StyledContent>
        <div className='hoverTopArea' style={{ display: 'none' }}></div>
        <StyledTitle id='hoverTitle'>
          {props.data.title}
        </StyledTitle>
        <StyledRelease id='hoverRelease'>
          <span>{`Released: ${moment(props.data.releaseDate).format('MMM D, Y')}`}</span>
          <div></div>
        </StyledRelease>
        <StyledScreenshots id='hoverScreenshots'>
          {props.data.previews.map((url, idx) => {
            return (
              <Screenshot style={{ animationDelay: `${idx + 1}s` }} url={url}>
              </Screenshot>
            );
          })}
        </StyledScreenshots>
        <StyledBody className='hoverBody'>
          <StyledReviewSum>
            <div className='title'>Overall user reviews:</div>
            <StyledReview summary={color}>{props.data.reviewSummary}</StyledReview>
            {` (${props.data.totalReviews} reviews)`}
            <div style={{ clear: 'left' }}></div>
          </StyledReviewSum>


        </StyledBody>
        <StyledBody className='hoverBody'>
          User Tags:
          <StyledRow className='hoverTagRow'>
            {props.data.userTags.map((tag) =>
              (<StyledTag>{tag}</StyledTag>)
            )}
          </StyledRow>
        </StyledBody>
      </StyledContent>
    </HoverBox >
  );
};



const DlcHover = (props) => {

  let view;
  if (Object.keys(props.data).length > 0) {
    view = <Content data={props.data}></Content>;
  } else {
    view = <div></div>;
  }

  return (
    <React.Fragment>
      {view}
    </React.Fragment>

  );
};

export default DlcHover;