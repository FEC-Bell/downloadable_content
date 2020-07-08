import React from 'react';
import ReactDOM from 'react-dom';
import DlcList from './components/dlcList.jsx';
import DlcHover from './components/dlcHover.jsx';
import axios from 'axios';
import { MainContainer, Title, Browse, Hover } from './components/styles/auxstyles.js';
import styled from 'styled-components';
import { GlobalStyle } from './components/styles/globalStyles.js';

const url = '/api/dlc/';

const StyledA = styled.a`
color: inherit;
text-decoration: none;
text-transform: none;
letter-spacing: 0;
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
      <React.Fragment>
        <GlobalStyle />
        {Object.keys(this.state.data[0]).length ?
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
            </Hover>
          </MainContainer >
          : <MainContainer></MainContainer>
        }
      </React.Fragment>

    );
  }
}

ReactDOM.render(<Dlc />, document.getElementById('dlc'));