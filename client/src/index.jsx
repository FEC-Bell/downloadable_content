import React from 'react';
import ReactDOM from 'react-dom';
import DlcList from './components/dlcList.jsx';
import DlcHover from './components/dlcHover.jsx';
import axios from 'axios';
import { MainContainer, Title, Browse, Hover } from './components/styles/auxstyles.js';
import styled from 'styled-components';

const url = '/api/dlc/';

const StyledA = styled.a`
color: inherit;
text-decoration: none;
text-transform: none;
letter-spacing: 0;
`;

const ArrowLeft = styled.div`
background-position: left;
left: 5px;
width: 7px;
height: 15px;
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJlJREFUeNqc0k0KgCAQBlCdI0SLlkEtu4DLTt6yC7SN2hX0cwWbCQvDMa0PBhN9EsxIrbXgMs57RWueJR13Di+ooboeCEILpaZYDC/oCoshgLwYIhCL5TBtMcjOilUT1OJH6FdLrOWDobslYIN7/FCRmO4oMmCmIwbf6NGOAH4gZwA82EFnO7ghx14VuLRm6yAvtLDgEOUQYADt6VgCZRDsZgAAAABJRU5ErkJggg==) no-repeat top;
position: absolute;
padding: 0;
margin: 0;
display: block;
`;


class Dlc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 66,
      data: [{}],
      hoverLeft: '',
      hoverTop: '',
      selectedDlc: {}
    };
    this.getData = this.getData.bind(this);
    this.setHoverPosition = this.setHoverPosition.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.gameId);
  }

  setHoverPosition(hoverLeft, hoverTop, selectedDlc) {
    this.setState({
      hoverLeft, hoverTop, selectedDlc
    });
  }

  getData(gameId = 1) {
    axios.get(url + gameId)
      .then((data) => {
        this.setState({
          data: data.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      Object.keys(this.state.data[0]).length ?
        <MainContainer>
          <div>
            <Title>CONTENT FOR THIS GAME
              <Browse className='note'>
                <StyledA href='https://google.com'>
                  {`Browse all `}
                  <em style={{ fontStyle: 'normal' }}>
                    ({this.state.data.length})
                  </em>
                </StyledA>
              </Browse>
            </Title>
          </div>

          <DlcList data={this.state.data} setHoverPosition={this.setHoverPosition} />
          <Hover left={this.state.hoverLeft} top={this.state.hoverTop} data={this.state.selectedDlc}>
            <DlcHover data={this.state.selectedDlc} />
            <ArrowLeft style={{ top: 10 }}></ArrowLeft>
          </Hover>
        </MainContainer >
        : <MainContainer></MainContainer>
    );
  }
}

ReactDOM.render(<Dlc />, document.getElementById('dlc'));