import styled from 'styled-components';

const Title = styled.h2`
font-size: 14px;
letter-spacing: 2px;
font-weight: normal;
line-height: 26px;
padding-top: 2px;
margin: 0 0 10px;
margin-bottom: 1px;
color: #fff;
background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/maincol_gradient_rule.png);
background-repeat: no-repeat;
background-position: bottom left;
`;

const Browse = styled.span`
float: right;
background: transparent;
border: 1px solid rgba(255,255,255,0.4);
border-radius: 2px;
font-size: 11px;
padding: 2px 15px;
line-height: normal;
text-decoration: none;
text-transform: none;
letter-spacing: 0;
any-link { color: #fff };
any-link:active { color: #fff };
color: #ffffff;
font-weight: normal;
font-style: normal;
`;

const MainContainer = styled.div`
margin-bottom: 11px;
margin-top: 60px;
background: #1b2838;
`;

const Hover = styled.div`
position: absolute;
z-index: 1526;
padding: 5px 12px 0 12px;
margin: 0;
display: block;
opacity: 1;
color: #c6d4df;
font-size: 12px;
`;

const DlcTable = styled.div`
color: #a8b2ba;
font-size: 12px;
`;

const DlcPrice = styled.div`
display: block;
position: absolute;
right: 14px;
padding: 0;
margin: 0;
color: #fff;
`;

const DiscountBloc = styled.div`
line-height: 15px;
position: relative;
padding: 0;
margin: 0;
`;

const DlcRow = styled.div`
background: linear-gradient(135deg, rgba(97,100,101,0.3) 0%,rgba(226,244,255,0.3) 100%);
background-color: ${props => props.highlight ? '#417a9b' : '#1a1a1a'};
display: block;
color: ${props => props.highlight ? '#ffffff' : '#a8b2ba'};
font-size: 12px;
position: relative;
padding: 4px 14px;
margin-bottom: 1px;
`;

export { Title, MainContainer, Browse, Hover, DlcTable, DlcPrice, DlcRow, DiscountBloc };