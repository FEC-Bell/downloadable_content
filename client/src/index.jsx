import React from 'react';
import ReactDOM from 'react-dom';
import DlcList from './components/dlcList.jsx';
import axios from 'axios';
import { MainContainer, Title, Browse } from './components/styles/auxstyles.js';
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
      gameId: 100,
      data: [{}]
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.gameId);
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
      <MainContainer>
        <Title>CONTENT FOR THIS GAME
          <Browse className='note'>
            <StyledA href="https://google.com">
              {`Browse all `}
              <em style={{ fontStyle: 'normal' }}>
                ({this.state.data.length})
              </em>
            </StyledA>
          </Browse>
        </Title>
        <DlcList data={this.state.data} />
      </MainContainer >
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));