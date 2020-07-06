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


class App extends React.Component {
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
          <DlcList data={this.state.data} setHoverPosition={this.setHoverPosition} />
          <Hover style={{ left: this.state.hover_left, top: this.state.hover_top }}>
            hello
          </Hover>
        </MainContainer >
        : <MainContainer></MainContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));