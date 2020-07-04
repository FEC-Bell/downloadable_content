import styled from 'styled-components';

const Title = styled.h2`
font-size: 14px;
letter-spacing: 2px;
font-weight: normal;
padding-top: 2px;
margin: 0 0 10px;
color: #fff;
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
`;

const MainContainer = styled.div`
// margin-bottom: 11px;
// margin-top: 60px;
background: #1b2838;
`;

export { Title, MainContainer, Browse };