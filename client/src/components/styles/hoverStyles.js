import styled, { keyframes } from 'styled-components';

const StyledContent = styled.div`
padding: 16px;
margin: 0;
color: #30455a;
font-size: 12px;
display: block;
`;

const HoverBox = styled.div`
& {
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
}
&:after{
  content:"";
  position: absolute;
  height: 0px;
  width: 0px;
  top: 39px;
  left: -2px; /* 1px buffer for zooming problems while rendering*/
  border-width: 7px;
  border-color: transparent rgba(227,234,239,1) transparent transparent;
  border-style: solid;
}
`;

const StyledScreenshots = styled.div`
position: relative;
width: 274px;
height: 153px;
margin: 5px 0;
`;

const ScreenshotHoverFadein = keyframes`
0% {
  opacity: 0;
}
3% {
  opacity: 1;
}
28% {
  opacity: 1;
}
31% {
  opacity: 0;
}
`;

const Screenshot = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-size: cover;
background-position: center center;
opacity: ${props => props.idx === 0 ? 1 : 0};
transition: opacity 300ms;
animation-name: ${ScreenshotHoverFadein};
animation-duration: ${props => props.duration};
animation-fill-mode: none;
animation-timing-function: linear;
animation-direction: normal;
animation-iteration-count: infinite;
animation-play-state: running;
transition-delay: 0s;
transition-duration: 0.3s;
transition-property: opacity;
transition-timing-function: ease-in;
display: block;
background-image: ${props => props.url};
animation-delay: ${props => props.delay};
`;

const StyledReview = styled.span`
color: ${props => props.summary};
`;

const StyledTitle = styled.h4`
color: #222d3d;
font-size: 15px;
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

export {
  StyledReviewSum, StyledBody, StyledTag, StyledRow, StyledRelease, StyledTitle, StyledReview, Screenshot, ScreenshotHoverFadein,
  StyledScreenshots, HoverBox, StyledContent
};