import React from 'react';
import ReactDOM from 'react-dom';
import DlcList from './components/dlcList.jsx';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { MainContainer, Title, Browse, Hover } from './components/styles/auxstyles.js';
import styled from 'styled-components';

const url = '/api/dlc/';

const StyledA = styled.a`
color: inherit;
text-decoration: none;
text-transform: none;
letter-spacing: 0;
`;

const theme = {
  fontFamily: 'Roboto, sans-serif',
  margin: 0,
  padding: 0
};



let history = createBrowserHistory();
let location = history.location;
let loc = location.pathname.split('/');

class Dlc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 0,
      data: [{}],
      selectedDlc: {}
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.setState({
      gameId: this.props.gameId
    });
    this.getData(this.props.gameId);
  }

  getData(gameId = 2) {
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
        {Object.keys(this.state.data[0]).length ?
          <MainContainer theme={theme}>
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
            <DlcList data={this.state.data} />
          </MainContainer >
          : <MainContainer></MainContainer>
        }
      </React.Fragment>

    );
  }
}

ReactDOM.render(<Dlc gameId={loc[2]} />, document.getElementById('dlc'));