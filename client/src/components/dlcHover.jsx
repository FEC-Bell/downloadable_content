import React from 'react';
import moment from 'moment';
import MiniPhotoCarousel from './miniPhotoCarousel.jsx';
import {
  StyledReviewSum, StyledBody, StyledTag, StyledRow, StyledRelease, StyledTitle, StyledReview, Screenshot,
  StyledScreenshots, HoverBox, StyledContent
} from './styles/hoverStyles.js';

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

  let moddedReviews = props.data.totalReviews.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');

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
        <MiniPhotoCarousel data={props.data.previews}/>
        <StyledBody className='hoverBody'>
          <StyledReviewSum>
            <div className='title'>Overall user reviews:</div>
            <StyledReview summary={color}>{props.data.reviewSummary}</StyledReview>
            {` (${moddedReviews} reviews)`}
            <div style={{ clear: 'left' }}></div>
          </StyledReviewSum>
        </StyledBody>
        <StyledBody className='hoverBody'>
          User Tags:
          <StyledRow className='hoverTagRow'>
            {
              props.data.userTags.map((tag) =>
                (<StyledTag>{tag}</StyledTag>)
              )
            }
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